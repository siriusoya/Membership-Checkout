import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #202124;
    font-family: "Inter", sans-serif;
    color: #BBBBBB;
    box-sizing: border-box;
  }
`;

const MainContainer = styled.div`
  position: relative;
`;

export {
  GlobalStyle,
  MainContainer
};