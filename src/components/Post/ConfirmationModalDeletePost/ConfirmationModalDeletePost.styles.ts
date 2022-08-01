import { Check, Cross } from 'akar-icons';
import styled, { css } from 'styled-components';
import * as fonts from '../../../assets/styles/Fonts';

const iconCSS = css`
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

const buttonCSS = css`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme.mode.colors.button1};
  padding: 0.8rem 1.6rem;
  border-radius: 1.6rem;

  cursor: pointer;

  > p {
    ${fonts.Small}
    color: ${(props) => props.theme.mode.colors.text};
    margin-left: 0.8rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(6, 9, 17, 0.9);
  z-index: 999;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalStyle = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem;

  padding: 3.2rem 5.6rem;
`;

export const Warning = styled.h4`
  ${fonts.Title4}
  color: ${(props) => props.theme.mode.colors.text};

  margin-bottom: 1.6rem;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CancelButton = styled.button`
  ${buttonCSS}
`;
export const ConfirmButton = styled.button`
  ${buttonCSS}
  background: #FF6C6C;
`;
export const CancelIcon = styled(Cross)`
  ${iconCSS}
`;
export const ConfirmIcon = styled(Check)`
  ${iconCSS}
`;
