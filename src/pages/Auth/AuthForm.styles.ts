import styled from 'styled-components';

import * as fonts from '../../assets/styles/Fonts';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > input:not([type='submit']) {
      width: 100%;

      background: none;
      ${fonts.H3_1}
      height: 5rem;

      border-bottom: 1px solid rgba(0, 0, 0, 0.5);

      &::placeholder {
        ${fonts.H3_1}
        font-weight: 400;
      }

      margin-bottom: 3.2rem;
    }

    > input[type='submit'] {
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

  margin-bottom: 3.2rem;
`;

export const HiddenInput = styled.input`
  width: 0 !important;
  height: 0 !important;
  margin: 0 !important;
`;
