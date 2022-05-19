import styled from 'styled-components';

import videoExample from '../../assets/imgs/VideoExemplo.png';

export const Container = styled.div``;

export const Banner = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: url(${videoExample});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Separator = styled.div`
  width: 100%;
  height: 8.4rem;
  background: ${(props) => props.color};
`;
