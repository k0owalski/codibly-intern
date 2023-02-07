import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useTypedDispatch, useTypedSelector } from 'hooks/useTypedRedux';
import { setProducts } from 'store/products.slice';
import Pagination from 'components/atoms/Pagination/Pagination';
import StyledTable from './Table.styled';

const API_ENDPOINT = 'https://reqres.in/api/products';

const Table: React.FC = () => {
  const { products } = useTypedSelector((state) => state);

  const [search] = useSearchParams();
  const dispatch = useTypedDispatch();

  const handleRowClick = () => null;

  useEffect(() => {
    fetch(`${API_ENDPOINT}?${search.toString()}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then(({ total, total_pages, data }) => {
        if (Array.isArray(data)) {
          dispatch(
            setProducts({
              total,
              total_pages,
              data,
            })
          );
        } else if (typeof data === 'object') {
          dispatch(
            setProducts({
              total,
              total_pages,
              data: [data],
            })
          );
        } else
          dispatch(
            setProducts({
              total,
              total_pages,
              data: [],
            })
          );
      })
      .catch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, dispatch]);

  return (
    <StyledTable>
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
    </StyledTable>
  );
};

export default Table;
