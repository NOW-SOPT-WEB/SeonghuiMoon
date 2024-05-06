import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

button {
        cursor: pointer;
        border-style: none;
    }

`;

export default GlobalStyles;
