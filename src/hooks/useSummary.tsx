import { TransactionContext } from "../context/TransactionsContext";
import { useContextSelector } from "use-context-selector";
//faz com que a variavel so seja ''recriacada/calculada" caso a dependencia mudar
import { useMemo } from "react";

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });
  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions]);

  return summary;
}
