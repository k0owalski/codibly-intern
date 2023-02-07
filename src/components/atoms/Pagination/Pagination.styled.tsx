import styled from 'styled-components';

const StyledPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 2rem 0 0;

  .control-prev.disabled,
  .control-next.disabled {
    display: none;
  }

  .control-item.selected .control-btn {
    font-weight: 600;
    text-decoration: underline;
  }
`;

export default StyledPagination;
