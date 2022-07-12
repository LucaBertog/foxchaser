import styled from 'styled-components';

import thumbnail from '../../assets/imgs/thumbnail.png';

export const Container = styled.div``;

export const Banner = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  background: linear-gradient(0deg, rgba(6, 9, 17, 0.85), rgba(6, 9, 17, 0.85));
`;
export const Separator = styled.div`
  width: 100%;
  height: 8.4rem;
  background: ${(props) => props.color};
`;

export const BakgroundVideo = styled.video`
  position: absolute;

  object-fit: cover;
  width: 100%;
  height: 100%;

  background-image: url(${thumbnail});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  z-index: -999;
`;
