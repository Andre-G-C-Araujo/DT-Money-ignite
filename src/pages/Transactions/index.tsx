import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { Table } from "../../components/Table";
import { Container, TransactionsContainer } from "./styles";

export const Transactions = () => {
  return (
    <Container>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <Table />
      </TransactionsContainer>
    </Container>
  );
};
