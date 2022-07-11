import styled from 'styled-components';

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2.4rem 3.2rem;

  border-radius: 1.6rem;

  background: ${(props) => props.theme.colors.white};
`;
