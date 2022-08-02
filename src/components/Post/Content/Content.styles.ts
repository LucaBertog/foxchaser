import styled from 'styled-components';
import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > div > img {
    width: 100%;
    max-height: 80rem;
    object-fit: cover;

    border-radius: 1.6rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 80rem;
  object-fit: cover;

  border-radius: 1.6rem;

  user-select: none;

  cursor: pointer;
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
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  > img {
    object-fit: contain;
    width: 100%;
    max-height: 100vh;

    user-select: none;
  }
`;

export const Text = styled.div`
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};

  padding: 0 2.4rem;
`;
