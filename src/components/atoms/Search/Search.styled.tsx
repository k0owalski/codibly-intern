import styled from 'styled-components';

const StyledSearch = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .search-by-id-label {
    font-size: 1.25rem;
    font-weight: 500;

    text-align: center;
  }

  .input-box {
    width: 80%;
    max-width: 30rem;
    height: 3rem;

    position: relative;

    .search-by-id {
      width: 100%;
      height: 100%;

      padding: 0 0 0 3rem;

      color: inherit;
      background-color: hsl(283, 48%, 24%);
      border-radius: 0.5rem;

      -moz-appearance: textfield;
      outline: none;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    .icon-search {
      width: 1.5rem;
      height: 1.5rem;

      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
    }

    .enter-query {
      display: grid;
      place-items: center;

      width: 2rem;
      height: 2rem;

      position: absolute;
      top: 0.5rem;
      right: 0.5rem;

      .icon-arrow {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export default StyledSearch;
