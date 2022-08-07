import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background: ${(props) => props.theme.mode.colors.body};
`;

export const Wrapper = styled.div`
  display: flex;

  width: 100%;

  margin: 5.6rem 0;
  @media (min-width: 768px) {
    margin: 0 0 0 calc(7.8rem + 4.8rem);
  }

  @media (min-width: 1100px) {
    margin: 2.4rem 0 0 calc(7.8rem + 4.8rem);
  }

  @media (min-width: 1400px) {
    margin: 2.4rem 0 0 7.8rem;
  }
`;
