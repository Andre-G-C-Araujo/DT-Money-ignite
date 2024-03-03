import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionsContext";
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export const Summary = () => {
  const summary = useSummary();

  //reduce percorre array e reduzir a uma nova estrutura
  // const summary = transactions.reduce(
  //   (accumalator, transaction) => {
  //     if (transaction.type === "income") {
  //       accumalator.income += transaction.price;
  //       accumalator.total += transaction.price;
  //     } else {
  //       accumalator.outcome -= transaction.price;
  //       accumalator.total -= transaction.price;
  //     }

  //     return accumalator;
  //   },
  //   { income: 0, outcome: 0, total: 0 }
  // );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
