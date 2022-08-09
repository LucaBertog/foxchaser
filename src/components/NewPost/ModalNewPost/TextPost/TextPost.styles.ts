import { Send } from 'akar-icons';
import styled from 'styled-components';
import * as fonts from '../../../../assets/styles/Fonts';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  > form {
    display: flex;
    flex-direction: column;
  }

  font-size: 1.6rem;
  color: red;

  #editorJS {
    padding: 0.8rem 1.6rem;
    border-radius: 1.6rem;
    border: 2px solid ${(props) => props.theme.mode.colors.bgIconDark};
  }

  .ce-block__content,
  .ce-toolbar__content {
    min-width: 52vw;
    max-width: 102rem;
  }

  .codex-editor {
    background: none;

    .ce-paragraph {
      ${fonts.Paragraph}
      color: ${(props) => props.theme.mode.colors.text};
    }

    .ce-paragraph[data-placeholder]:empty::before {
      color: ${(props) => props.theme.mode.colors.weakText};
    }

    .icon {
      color: ${(props) => props.theme.mode.colors.text};
    }

    .ce-settings {
      background: ${(props) => props.theme.mode.colors.bgIconDark};
    }
  }
`;

export const Form = styled.form`
  min-width: 60vw;
  max-width: 110rem;

  background: ${(props) => props.theme.mode.colors.container};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;

  padding: 1.6rem 3.2rem;
  border-radius: 1.6rem;

  > p {
    font-size: 1.6rem;
    color: red;

    &:empty {
      display: none;
    }
  }
`;

export const TitleInput = styled.input`
  ${fonts.Paragraph}
  color: ${(props) => props.theme.mode.colors.text};

  width: 100%;

  background: none;
  padding: 0.8rem 1.6rem;
  border-radius: 1.6rem;
  border: 2px solid ${(props) => props.theme.mode.colors.bgIconDark};

  &::placeholder {
    color: ${(props) => props.theme.mode.colors.weakText};
  }
`;

export const Editor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Publish = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 0.8rem 1.6rem;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.mode.colors.iconDark};

  align-self: flex-end;

  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
`;
export const SendIcon = styled(Send)`
  min-width: 1.6rem;
  max-width: 1.6rem;
  min-height: 1.6rem;
  max-height: 1.6rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;
