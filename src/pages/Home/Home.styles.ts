import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 1280px) {
    width: 70%;
  }
  position: relative;

  height: 100%;

  padding: 2.4rem 1.6rem;
`;

export const Main = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
