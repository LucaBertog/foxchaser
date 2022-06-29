import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 5.2rem;
  background: ${(props) => props.theme.mode.colors.container};

  border-radius: 1.6rem;

  padding: 1.6rem 2.4rem;
`;
