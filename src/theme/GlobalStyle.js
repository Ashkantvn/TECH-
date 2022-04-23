import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    header{
        background-color:#171717 ;
        position:fixed;
        width:100% ;
        top:0 ;
    }
    body{
        /* overflow: hidden; */
        position:relative ;
        min-height: 100vh;
        background-color:#171717;
        background-repeat: no-repeat;
        background-attachment:fixed;
        color:#e8e8e8;
        padding-top:5vh;
        @media screen and (max-width:767px){
            padding-top:10vh;
        }
    }
`;
//0d0d0c 171717