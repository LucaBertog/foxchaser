import styled from 'styled-components';

import { Cross, Search as SearchIcon } from 'akar-icons';
import * as fonts from '../../assets/styles/Fonts';

export const Container = styled.div`
  width: 100%;
  height: 5.2rem;
  background: ${(props) => props.theme.mode.colors.container};

  border-radius: 1.6rem;

  padding: 1.6rem 2.4rem;

  .ReactModal__Overlay {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: papayawhip;

    z-index: 999;
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rebeccapurple;
  }
`;

export const Wrapper = styled.button`
  width: 100%;

  display: flex;
  align-items: center;

  background: none;

  > span {
    ${fonts.Small}
    color: ${(props) => props.theme.mode.colors.text};
  }

  cursor: pointer;
`;

export const Search = styled(SearchIcon)`
  width: 2.4rem;
  height: 2.4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};

  margin-right: 1.6rem;
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
  width: 90%;
  height: 90%;
  @media (min-width: 1100px) {
    height: 80%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  @media (min-width: 500px) {
    height: 10%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SearchField = styled.input`
  background: rgba(0, 0, 0, 0);
  width: 100%;
  @media (min-width: 768px) {
    width: 85%;
  }

  height: 100%;

  ${fonts.Paragraph}
  color: ${(props) => props.theme.mode.colors.text};

  &::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    line-height: 4.8rem;
    color: ${(props) => props.theme.mode.colors.text};
  }

  font-size: 3rem;
  @media (min-width: 1100px) {
    font-size: 8rem;
  }

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 100%;
  width: 15%;
`;

export const CloseButton = styled(Cross)`
  cursor: pointer;
  width: 9rem;
  height: 100%;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;
