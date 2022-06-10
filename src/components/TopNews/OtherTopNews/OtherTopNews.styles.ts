import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;

  position: relative;

  @media (min-width: 768px) {
    &:first-of-type {
      margin-bottom: 1.6rem;
    }
  }
`;

export const Img = styled.div<{ url: string }>`
  width: 40%;
  height: 10vh;
  min-height: 5rem;
  margin-right: 0.8rem;
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  background: ${(props) => props.theme.mode.colors.imageGradient},
    url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border: 1px solid ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem;
`;
