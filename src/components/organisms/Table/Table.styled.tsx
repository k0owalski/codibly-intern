import styled from 'styled-components';

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;

  margin: 0 auto;
  padding: 3rem 0;

  .product-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    width: 100%;

    .product-item {
      width: 100%;

      &.product-item-headings {
        display: grid;
        grid-template-columns: 1fr 8fr 1fr;
        column-gap: 1rem;

        width: 100%;

        padding: 1rem;

        font-weight: 600;

        border-bottom: 1px solid hsla(283, 48%, 24%, 0.16);
      }

      .product-item-btn {
        display: grid;
        grid-template-columns: 1fr 8fr 1fr;
        column-gap: 1rem;

        width: 100%;

        padding: 1rem;

        text-align: left;

        .product-name {
          display: block;

          overflow-x: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .product-list-err {
    text-align: center;
  }

  .product-list-err-return {
    margin: 2rem auto;
    padding: 1rem;

    color: #fafafa;
    background-color: hsl(283, 53%, 38%);

    border-radius: 0.25rem;
  }
`;

export default StyledTable;
