import styled, { css } from 'styled-components';

import * as fonts from '../../assets/styles/Fonts';

const animationCSS = css`
  transform: translateY(-3rem);
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.blue4};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input:not([type='submit']) {
      width: 100%;

      background: none;
      ${fonts.H3_1}
      height: 5rem;
    }

    input[type='submit'] {
      width: 100%;
      height: 5.6rem;
      padding: 0.4rem 0;
      border-radius: 1.6rem;

      box-shadow: 0px 0px 4px #fd9800;

      background: ${(props) => props.theme.colors.button2};
      ${fonts.ButtonFont}
      font-size: 2rem;
      line-height: 4.8rem;
      color: #fff;

      cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
  ${fonts.H3N}
  color: ${(props) => props.theme.colors.blue4};

  margin-bottom: 3.2rem;
`;

export const WrapperInput = styled.div<{ isEmpty: string }>`
  position: relative;
  width: 100%;

  margin-bottom: 3.2rem;

  > label {
    position: absolute;
    left: 0;
    bottom: 0;

    ${fonts.H3_1}
    font-weight: 400;
    color: #757575;

    transition: all 0.3s ease;
  }

  ${(props) => props.isEmpty && `> input ~ label { ${animationCSS} }`}

  > input:focus ~ label {
    ${animationCSS}
  }

  > input:focus + div {
    background: ${(props) => props.theme.colors.blue4};
  }
`;

export const HiddenInput = styled.input`
  width: 0 !important;
  height: 0 !important;
  margin: 0 !important;
`;

export const UnderLine = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.5);

  transition: all 0.3s ease;
`;
