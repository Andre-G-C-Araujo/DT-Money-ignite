import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.GRAY900};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionsButton = styled.button`
  height: 50px;
  border: 0;
  background: ${({ theme }) => theme.GREEN500};
  color: ${({ theme }) => theme.WHITE};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.GREEN700};
    transition: background 300ms;
  }
`;
