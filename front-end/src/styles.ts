import { createGlobalStyle } from "styled-components"

export const GlobalCss = createGlobalStyle`
    * {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        background-color: #000;
        color: #fff;
    }
    
    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }
`