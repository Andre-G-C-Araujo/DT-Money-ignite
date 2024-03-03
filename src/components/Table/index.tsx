import { useContext } from "react";
import { PriceHighlight, TableContainer } from "./styles";
import { TransactionContext } from "../../context/TransactionsContext";

export const Table = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <TableContainer>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>

              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.price}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>

              <td>{transaction.createdAt}</td>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};
