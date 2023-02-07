import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useTypedDispatch, useTypedSelector } from 'hooks/useTypedRedux';
import { setProducts } from 'store/products.slice';
import Pagination from 'components/atoms/Pagination/Pagination';
import StyledTable from './Table.styled';

const API_ENDPOINT = 'https://reqres.in/api/products';

const Table: React.FC = () => {
  const { products } = useTypedSelector((state) => state);

  const [search, setSearch] = useSearchParams();
  const [error, setError] = useState('');

  const dispatch = useTypedDispatch();

  const handleRowClick = () => null;
  const handleReset = () => {
    search.delete('page');
    search.delete('per_page');
    search.delete('id');

    setSearch(search);
  };

  useEffect(() => {
    setError('');

    if (!search.get('page')) {
      search.set('page', '1');

      setSearch(search);
      return;
    }

    if (!search.get('per_page')) {
      search.set('per_page', '5');

      setSearch(search);
      return;
    }

    fetch(`${API_ENDPOINT}?${search.toString()}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then(({ total, total_pages, data }) => {
        if (!data || data?.length === 0) {
          setError('No records found :(');
          return;
        }

        if (Array.isArray(data)) {
          dispatch(
            setProducts({
              total,
              total_pages,
              data,
            })
          );
        } else
          dispatch(
            setProducts({
              total,
              total_pages,
              data: [data],
            })
          );
      })
      .catch(() => setError('An error occured :('));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, dispatch]);

  return (
    <StyledTable>
      {!error ? (
        <>
          <ul className="product-list">
            <li className="product-item product-item-headings">
              <span className="product-id">ID</span>
              <span className="product-name">Name</span>
              <span className="product-year">Year</span>
            </li>
            {products.data.map((product) => (
              <li
                className="product-item"
                key={product.id}
                style={{ backgroundColor: product.color }}
              >
                <button
                  className="product-item-btn"
                  type="button"
                  onClick={handleRowClick}
                >
                  <span className="product-id">{product.id}</span>
                  <span className="product-name">{product.name}</span>
                  <span className="product-year">{product.year}</span>
                </button>
              </li>
            ))}
          </ul>
          <Pagination totalPages={products.total_pages} />
        </>
      ) : (
        <>
          <p className="product-list-err">{error}</p>
          <button
            className="product-list-err-return"
            type="button"
            onClick={handleReset}
          >
            Reset query params
          </button>
        </>
      )}
    </StyledTable>
  );
};

export default Table;
