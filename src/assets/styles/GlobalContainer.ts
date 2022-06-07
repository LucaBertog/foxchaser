import styled from 'styled-components';

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.mode.colors.body};
`;
