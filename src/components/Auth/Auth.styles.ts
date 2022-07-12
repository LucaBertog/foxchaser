import styled, { css } from 'styled-components';

import * as fonts from '../../assets/styles/Fonts';
import backgroundImg from '../../assets/imgs/backgroundAuth.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
`;

export const Modal = styled.div`
  width: 95%;
  max-width: 1400px;
  @media (min-width: 1300px) {
    width: 85%;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(241, 241, 241, 0.4);
  border-radius: 1.6rem;
`;

export const Logo = styled.img`
  width: 4.6rem;
  height: 4.6rem;

  margin-right: 2rem;
`;

const borderCSS = css`
  border-bottom: 2px solid #ff7a00;
`;

export const WrapperNav = styled.div<{ isPageLogin: boolean | undefined }>`
  display: flex;
  align-items: center;

  & > div > a {
    text-decoration: none;

    ${fonts.H3_1}

    color: #060911;
  }

  ${(props) =>
    props.isPageLogin
      ? `& > div:last-of-type {${borderCSS}}`
      : `& > div:first-of-type {${borderCSS}}`}
`;

export const WrapperLink = styled.div`
  padding: 0 2rem;
`;

export const Content = styled.div`
  width: 100%;
  padding: 2.4rem 2.4rem 3.2rem 2.4rem;
`;
