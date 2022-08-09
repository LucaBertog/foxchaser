import { Send } from 'akar-icons';
import styled from 'styled-components';
import * as fonts from '../../../../assets/styles/Fonts';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
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

  #image {
    position: absolute;
    display: hidden;
    opacity: 0;
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

export const Img = styled.label`
  width: 100%;
  padding: 2.4rem;
  border-radius: 1.6rem;
  border: 2px dotted ${(props) => props.theme.mode.colors.bgIconDark};

  cursor: pointer;
`;

export const ImgMessage = styled.div<{ url: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20rem;
  border-radius: 1.6rem;

  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;

  > span {
    ${fonts.ParagraphN}
    color: ${(props) => props.theme.mode.colors.text};
  }

  ${(props) => props.url && '> span {display:none;}'}
`;

export const UploadButton = styled.div`
  display: inline-block;
  ${fonts.Small}
  border-radius: 1.6rem;
  padding: 0.6rem 1.6rem;

  color: ${(props) => props.theme.mode.colors.text};
  background: ${(props) => props.theme.mode.colors.iconDark};
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
