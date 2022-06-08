import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  position: relative;
  width: 100%;
  height: 100%;

  padding: 3rem 1.6rem;
`;

export const Main = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    width: 60%;
  }

  display: flex;
  flex-direction: column;
`;
