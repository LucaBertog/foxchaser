import styled from 'styled-components';

export const Container = styled.div<{ url: string }>`
  position: relative;

  width: 100%;
  height: 33rem;

  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid ${(props) => props.theme.mode.colors.borderImg};

  border-radius: 1.6rem;
  padding: 0 1.6rem;
  margin-bottom: 7rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
`;
