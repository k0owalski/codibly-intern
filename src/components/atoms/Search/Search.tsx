import React, { useId, KeyboardEvent, SyntheticEvent, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import StyledSearch from 'components/atoms/Search/Search.styled';

import iconArrow from 'assets/icons/icon-arrow-right.svg';
import iconSearch from 'assets/icons/icon-search.svg';

const Search: React.FC = () => {
  const [search, setSearch] = useSearchParams();

  const inputId: string = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchID = search.get('id') || '';

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'e' || event.key === '+' || event.key === '-')
      event.preventDefault();
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    if (inputRef.current?.value) search.set('id', inputRef.current?.value);
    else search.delete('id');

    setSearch(search);
  };

  return (
    <StyledSearch onSubmit={handleSubmit}>
      <label htmlFor={inputId} className="search-by-id-label">
        Filter by the product ID
      </label>
      <div className="input-box">
        <img className="icon-search" src={iconSearch} alt="Search" />
        <input
          type="number"
          name="search-by-id"
          id={inputId}
          className="search-by-id"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          defaultValue={searchID}
        />
        <button type="button" className="enter-query" onClick={handleSubmit}>
          <img className="icon-arrow" src={iconArrow} alt="Enter" />
        </button>
      </div>
    </StyledSearch>
  );
};

export default Search;
