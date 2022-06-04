import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 270px) {
      font-size: 50%;
    }
    @media (max-width: 210px) {
      font-size: 40%;
    }
    @media (max-width: 170px) {
      font-size: 30%;
    }
    @media (max-height: 760px) and (min-width: 768px) {
      font-size: 50%;
    }
    @media (max-height: 620px) and (min-width: 768px) {
      font-size: 40%;
    }
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
`;
