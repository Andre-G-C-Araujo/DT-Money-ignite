import { PriceHighlight, TableContainer } from "./styles";

export const Table = () => {
  return (
    <TableContainer>
      <tbody>
        <tr>
          <td width="50%">Desenvolvimento de site</td>

          <td>
            <PriceHighlight variant="income">RS 12.000,00</PriceHighlight>
          </td>
          <td>Venda</td>

          <td>03/03/24</td>
        </tr>
        <tr>
          <td width="50%">Hamburguer</td>

          <td>
            <PriceHighlight>- RS 12,00</PriceHighlight>
          </td>
          <td>Alimentaçao</td>

          <td>04/03/24</td>
        </tr>
      </tbody>
    </TableContainer>
  );
};
