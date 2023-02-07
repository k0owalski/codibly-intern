import React, { MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import usePagination from 'hooks/usePagination';
import StyledPagination from './Pagination.styled';

const Pagination: React.FC<{ totalPages: number }> = ({ totalPages }) => {
  const [search, setSearch] = useSearchParams();

  const siblingCount = 1;
  const page = parseInt(search.get('page') || '1', 10);

  const paginationRange = usePagination({ page, totalPages, siblingCount });

  if (page === 0 || paginationRange.length < 2) return null;

  const handlePrev = (): void => {
    search.set('page', (page - 1).toString());
    setSearch(search);
  };
  const handleNext = (): void => {
    search.set('page', (page + 1).toString());
    setSearch(search);
  };
  const handleControlClick = (event: MouseEvent<HTMLButtonElement>): void => {
    search.set('page', event.currentTarget.innerText);
    setSearch(search);
  };

  return (
    <StyledPagination>
      <li className={`control-prev ${page === 1 ? 'disabled' : ''}`}>
        <button type="button" className="control-btn" onClick={handlePrev}>
          &lt;
        </button>
      </li>
      {paginationRange.map((button, index) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={index.toString()}
          className={`control-item ${
            page.toString() === button ? 'selected' : ''
          }`}
        >
          <button
            type="button"
            className="control-btn"
            onClick={handleControlClick}
          >
            {button}
          </button>
        </li>
      ))}
      <li className={`control-next ${page === totalPages ? 'disabled' : ''}`}>
        <button type="button" className="control-btn" onClick={handleNext}>
          &gt;
        </button>
      </li>
    </StyledPagination>
  );
};

export default Pagination;
