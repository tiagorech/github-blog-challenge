import { createGlobalStyle } from "styled-components";
import { stylesStandard } from "./stylesStandart";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['blue']};
    }

    body {
        background-color: ${props => props.theme['base-background']};
        color: ${props => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
    ${stylesStandard.fonts.textM}
    color: ${({ theme }) => theme["base-text"]};
    }

    a {
        text-decoration: none;
    }

    button {
        border: 0;
        background-color: transparent;
        cursor: pointer;
    }

    input {
        border: 0;
        outline: 0;
    }
`