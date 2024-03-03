import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme.GRAY900};
    color: ${({ theme }) => theme.GRAY300};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.GRAY500};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.GREEN300};
    color: ${({ theme }) => theme.GRAY300};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.GREEN500};
      border-color: 1px solid ${({ theme }) => theme.GREEN300};
      color: ${({ theme }) => theme.WHITE};
      transition: backgroun-color 300ms, color 300ms, border-color 300ms;
    }
  }
`;
