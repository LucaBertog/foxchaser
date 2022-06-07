import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.8rem 2.4rem;

  width: 100%;
  background: ${(props) => props.theme.mode.colors.navBar};
`;
