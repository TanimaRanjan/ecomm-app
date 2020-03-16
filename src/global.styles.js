import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
    }
    
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 80px;

        @media screen and (max-width:800px) {
            padding: 20px;
        }

    }
    
    a {
        text-decoration: none;
        color:black;
    }
`