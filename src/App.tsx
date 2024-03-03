import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./context/TransactionsContext";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
};
