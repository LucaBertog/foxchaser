import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;

  width: 30%;
  padding: 2.4rem;
  background: rgba(255, 255, 255, 0.5);

  border-radius: 1.6rem 0 0 1.6rem;

  > img {
    margin-top: 4.6rem;

    height: 70vh;
  }
`;

export const WrapperContent = styled.div`
  width: 70%;
  padding: 6.4rem 8rem;

  > div:first-of-type {
    justify-content: flex-end;
    padding-right: 2.4rem;
  }
`;
