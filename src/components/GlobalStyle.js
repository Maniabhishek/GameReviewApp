import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        
    }

    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
    }

    body{
        font-family:'Montserrat',sans-serif;
        width: 100%;
        background-color: #1b1b1b;
    }
    
    h2{
        font-size:3rem;
        font-family:'Abril Fatface' cursive;
        font-weight: lighter;
        color: #fff;
    }

    h3{
        font-size:1.3rem;
        /* color:#333; */
        padding:1rem 0rem;
        color: #fff;


    }

    p{
        font-size: 1.2rem;
        line-height:200%;
        color:#696969;
        /* color: #fff; */

    }
    a{
        text-decoration:none;
        /* color:#333; */
        color: #fff;

    }

    img{
        display: block;
    }
`;

export default GlobalStyle;