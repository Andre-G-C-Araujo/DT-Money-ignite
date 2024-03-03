import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.GRAY800};

  /*Hakizinho para centralizar component fixed */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*------------------------- */

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme.GRAY900};
      color: ${({ theme }) => theme.GRAY300};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.GRAY500};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background-color: ${({ theme }) => theme.GREEN500};
      color: ${({ theme }) => theme.WHITE};
      font-weight: bold;
      padding: 0 1.25;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.GREEN700};
        transition: background 300ms color 300ms;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  line-height: 0;
  right: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.GRAY500};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant?: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background-color: ${({ theme }) => theme.GRAY700};
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.GRAY300};

  svg {
    color: ${({ theme, variant }) =>
      variant === "income" ? theme.GREEN300 : theme.RED300};
  }
  &[data-state="unchecked"]:hover {
    background: ${({ theme }) => theme.GRAY600};
    transition: background 300ms;
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.WHITE};
    background-color: ${({ theme, variant }) =>
      variant === "income" ? theme.GREEN500 : theme.RED500};

    svg {
      color: ${({ theme }) => theme.WHITE};
    }
  }
`;
