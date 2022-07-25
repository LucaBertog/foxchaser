import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  bottom: -3rem;

  width: 40%;
  height: 4rem;
  background: ${(props) => props.theme.mode.colors.container};

  border-radius: 1.6rem;
`;
