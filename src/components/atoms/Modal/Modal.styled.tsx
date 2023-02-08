import styled from 'styled-components';

const StyledModal = styled.div`
  width: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  z-index: 99;

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;

    padding: 2rem;

    background-color: #fff;
    border-radius: 0.5rem;

    .modal-close-btn {
      width: fit-content;

      padding: 0.75rem 1rem;

      color: hsl(0, 0%, 98%);
      background-color: hsl(283, 53%, 38%);
      border-radius: 0.25rem;
    }

    .modal-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: max-content;
      gap: 1.5rem;

      width: 100%;

      .modal-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;

        .modal-item-label {
          font-size: 0.75rem;
          font-weight: 600;

          opacity: 0.8;
        }

        .modal-item-value {
          display: block;

          border-bottom: 1px solid #aaa;
        }
      }

      @media screen and (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  }

  &::before {
    content: '';

    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50vw -50vh;

    background-color: hsla(0, 0%, 0%, 0.32);

    z-index: -1;
  }
`;

export default StyledModal;
