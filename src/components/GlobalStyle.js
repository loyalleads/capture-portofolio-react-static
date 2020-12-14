import { createGlobalStyle } from "styled-components";

const defaultTheme = {
  mainColor: "#23d997",
  mainBackgroundColor: "#1b1b1b",
  headerColor: "white",
  textColor: "#ccc",
};

const GlobalStyle = createGlobalStyle`

*{
   margin:0;
   padding:0;
   box-sizing: border-box;
}

body{
   background: ${defaultTheme.mainBackgroundColor};
}
 button{
    font-weight: bold;
    font-size: 1.1 rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid ${defaultTheme.mainColor};
    background: transparent;
    color: ${defaultTheme.headerColor};
    color: ${defaultTheme.textColor};
    transition: all .5s ease;
    &:hover{
       background-color: ${defaultTheme.mainColor};
       color:${defaultTheme.headerColor};
       color:${defaultTheme.textColor};
    }
 }
 h2{
       font-weight:lighter;
       font-size: 4rem;
    }
    h3{
       color: ${defaultTheme.headerColor};
       color: ${defaultTheme.textColor};
    }
    h4{
       font-weight:bold;

    }
    a{
       font-size:1.1rem;
    }
    span{
       font-weight:bold;
       color:${defaultTheme.mainColor};
    }
    p{
       padding: 3rem 0rem;
       color: ${defaultTheme.textColor};
       font-size: 1.4rem;
       line-height: 150%;
    }
`;

export default GlobalStyle;
