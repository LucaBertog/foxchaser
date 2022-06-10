import styled from 'styled-components';

import { Ribbon } from 'akar-icons';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  @media (min-width: 768px) {
    margin-right: 1.6rem;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  position: relative;
`;
export const Img = styled.div<{ url: string }>`
  width: 100%;
  height: 20vh;
  @media (min-width: 768px) {
    min-height: 27rem;
  }

  background: ${(props) => props.theme.mode.colors.imageGradient},
    url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem;
`;
export const SaveNews = styled(Ribbon)`
  width: 2.4rem;
  height: 2.4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};

  position: absolute;
  top: 0.8rem;
  right: 0.8rem;

  cursor: pointer;
`;
