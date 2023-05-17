import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FFFFFF;
        --white-200: #F7FAFC;
        --gray: #1A202C;
        --gray-light: #F7FAFC;
        --gray-border: #E8E8E8;
        --green-light: #04C35C;
        --purple-light: #2B6CB0;  
        --font-merri: 'Merriweather', serif;
        --font-lato: 'Lato', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }
`;