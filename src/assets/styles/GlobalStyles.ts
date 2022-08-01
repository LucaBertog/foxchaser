import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    ::-webkit-scrollbar {
      display: none;
    }
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

`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background: ${(props) => props.theme.mode.colors.body};
`;

export const GlobalWrapper = styled.div`
  max-width: 120rem;
  display: flex;

  width: 100%;

  margin: 5.6rem 0;
  @media (min-width: 768px) {
    margin: 0 4.8rem 0 calc(7.8rem + 4.8rem);
  }

  @media (min-width: 1100px) {
    margin: 2.4rem 4.8rem 0 calc(7.8rem + 4.8rem);
  }

  @media (min-width: 1400px) {
    margin: 2.4rem 0 0 7.8rem;
  }
`;

export const PostsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column-reverse;

  background: ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem 1.6rem 0 0;
`;

export const PostSeparator = styled.div`
  width: 100%;
  min-height: 0.1px;
  background: ${(props) => props.theme.mode.colors.separator};
`;
