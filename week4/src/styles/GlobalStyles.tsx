import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

body {
    width: 100%;
    height: 100%;
}

button {
        cursor: pointer;
        border-style: none;
    }

`;

export default GlobalStyles;
