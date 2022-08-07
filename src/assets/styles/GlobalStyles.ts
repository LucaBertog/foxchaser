import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';
import * as fonts from './Fonts';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
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

  .Toastify__toast {
    background: ${(props) => props.theme.mode.colors.bgToast};
    border-radius: 1.6rem;
    padding: 1.6rem;

    .Toastify__toast-body {
      ${fonts.Captar}
      color: ${(props) => props.theme.mode.colors.text};
      opacity: 0.8;
      padding: 0 0.8rem;
    }

    svg {
        width: 1.6rem;
        height: 1.6rem;
        color: ${(props) => props.theme.mode.colors.iconLight};
    }
  }

  .Toastify__close-button--light {
    opacity: 0.8;
  }
`;

export const PostsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem 1.6rem 0 0;
`;

export const PostSeparator = styled.div`
  width: 100%;
  min-height: 0.1px;
  background: ${(props) => props.theme.mode.colors.separator};
`;
