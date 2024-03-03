import { useContext } from "react";
import { TransactionContext } from "../context/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionContext);
  const summary = transactions.reduce(
    (accumalator, transaction) => {
      if (transaction.type === "income") {
        accumalator.income += transaction.price;
        accumalator.total += transaction.price;
      } else {
        accumalator.outcome -= transaction.price;
        accumalator.total -= transaction.price;
      }

      return accumalator;
    },
    { income: 0, outcome: 0, total: 0 }
  );

  return summary;
}
