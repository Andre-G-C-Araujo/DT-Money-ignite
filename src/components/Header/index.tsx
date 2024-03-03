import * as Dialog from "@radix-ui/react-dialog";

import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";

import logoDT from "./../../assets/dtMoney.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDT} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova Trasniçao</NewTransactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
