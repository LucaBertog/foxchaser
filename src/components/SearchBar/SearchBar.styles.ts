import styled, { css } from 'styled-components';

import { Cross, Search as SearchIcon } from 'akar-icons';
import * as fonts from '../../assets/styles/Fonts';

const mobileCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  > button {
    justify-content: center;
    align-items: center;
  }

  > button > span {
    display: none;
  }

  > button > svg {
    margin: 0;
  }
`;

export const Container = styled.div<{ isMobile: true | undefined }>`
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

  ${(props) => props.isMobile && mobileCSS}
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

export const Results = styled.div`
  height: 90%;
  color: white;
  overflow-y: auto;
`;

export const Title = styled.h3`
  ${fonts.Title3}
  color: ${(props) => props.theme.mode.colors.text};

  margin-bottom: 1.6rem;
`;

export const User = styled.div`
  width: 100%;
  max-width: 30rem;

  display: flex;
  align-items: center;

  background: ${(props) => props.theme.mode.colors.container};
  padding: 0.8rem 1.6rem;
  border-radius: 1.6rem;

  margin-bottom: 0.8rem;
`;

export const Avatar = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 100%;
  border: 2px solid ${(props) => props.theme.mode.colors.iconLight};
`;

export const Name = styled.p`
  ${fonts.ParagraphN}
  color: ${(props) => props.theme.mode.colors.text};

  margin: 0 0.8rem 0 1.6rem;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Username = styled.p`
  ${fonts.ParagraphN}
  color: ${(props) => props.theme.mode.colors.weakText};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
