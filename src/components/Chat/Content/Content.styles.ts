import { Attach, MoreHorizontalFill } from 'akar-icons';
import styled, { css } from 'styled-components';
import * as fonts from '../../../assets/styles/Fonts';

const iconCSS = css`
  min-width: 2rem;
  max-width: 2rem;
  min-height: 2rem;
  max-height: 2rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

export const Container = styled.div`
  * {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  flex: 4;
  height: 100%;

  background: ${(props) => props.theme.mode.colors.container};

  border-radius: 1.6rem;
  padding: 1.6rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 9rem;

  border-radius: 1.6rem;
  padding: 0.8rem 2.4rem;
  background: ${(props) => props.theme.mode.colors.bgGamesWrapper};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Image = styled.img`
  width: 7.2rem;
  height: 7.2rem;

  border: 2px solid ${(props) => props.theme.mode.colors.iconLight};
  border-radius: 100%;
`;

export const Name = styled.div`
  ${fonts.ParagraphN}
  color: ${(props) => props.theme.mode.colors.text};

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MoreOptions = styled(MoreHorizontalFill)`
  ${iconCSS}
`;

export const NewMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: 100%;
  height: 4.8rem;

  border-radius: 1.6rem;
  padding: 1.6rem;
  background: ${(props) => props.theme.mode.colors.bgGamesWrapper};
`;

export const AttachIcon = styled(Attach)`
  cursor: pointer;
  ${iconCSS}
`;

export const NewMessage = styled.input`
  width: 100%;

  background: none;
  ${fonts.Paragraph}
  color: ${(props) => props.theme.mode.colors.text};

  &::placeholder {
    color: ${(props) => props.theme.mode.colors.weakText};
  }
`;
