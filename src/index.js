import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./typography";

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color:#ecf0f1;
}`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);

/*
  Store 사용법 
  Store에 state를 넣어주고
  Provider를 생성하고,
  똑같은 store를 import
  consumer를 사용
*/
