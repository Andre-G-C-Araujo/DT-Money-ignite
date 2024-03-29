import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    }



    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.GREEN500}
    }


    body {
        background-color: ${({ theme }) => theme.GRAY800};
        color: ${({ theme }) => theme.GRAY100};


    }

    body, input , textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }
    
`;
