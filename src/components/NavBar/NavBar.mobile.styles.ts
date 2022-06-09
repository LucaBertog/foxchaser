import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  z-index: 999;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.8rem 2.4rem;

  width: 100%;
  background: ${(props) => props.theme.mode.colors.container};
`;
