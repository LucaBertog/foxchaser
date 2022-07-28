import { Camera } from 'akar-icons';
import styled from 'styled-components';
import * as fonts from '../../../../assets/styles/Fonts';

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
  width: 50%;
  background-color: ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem;

  padding: 3.2rem 5.6rem;
`;

export const ImageWrapper = styled.div<{ isProfilePicture: boolean }>`
  position: relative;
  ${(props) =>
    props.isProfilePicture
      ? `
      position: absolute;
      left: 50%;
      transform: translate(-50%, -80%);`
      : ''}
  cursor: pointer;

  margin-bottom: 1.6rem;

  > input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const CameraIcon = styled(Camera)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 4rem;
  height: 4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

export const ProfilePicture = styled.label<{ url: string }>`
  width: 11.2rem;
  height: 11.2rem;

  > div {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 11.2rem;
    height: 11.2rem;

    border-radius: 100%;
    border: 2px solid ${(props) => props.theme.mode.colors.iconLight};

    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
  }

  opacity: 0.6;
`;

export const FinishButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 1.6rem;
`;
export const CancelButton = styled.div`
  ${fonts.Paragraph}
  font-weight: 300;
  color: ${(props) => props.theme.mode.colors.text};

  padding: 0.5rem 1.6rem;
  background: none;

  cursor: pointer;
`;
export const SaveButton = styled.input`
  ${fonts.Paragraph}
  font-weight: 300;
  color: ${(props) => props.theme.mode.colors.text};

  padding: 0.5rem 2.4rem;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.mode.colors.button1};

  cursor: pointer;
`;

export const RestWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CoverPicture = styled.label<{ url: string }>`
  > div {
    width: 100%;
    height: 13rem;

    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;

    border-radius: 1.6rem;
  }
  opacity: 0.6;
`;

export const Title = styled.h4`
  ${fonts.ParagraphN}
  color: ${(props) => props.theme.mode.colors.text};

  margin-bottom: 0.8rem;
`;

export const NameInput = styled.input`
  ${fonts.Paragraph}
  color: ${(props) => props.theme.mode.colors.text};

  width: 50%;
  border-radius: 1.6rem;

  padding: 0.8rem 1.6rem;

  background: ${(props) => props.theme.mode.colors.button1};
`;
