import styled from 'styled-components';
import * as fonts from '../../assets/styles/Fonts';

export const Container = styled.div`
  width: 100%;
  @media (min-width: 1100px) {
    width: 70%;
    padding: 0 4.8rem 0 0;
  }

  height: 100%;

  padding: 2.4rem 1.6rem;
`;

export const Title = styled.h2`
  ${fonts.Title2}
  color: ${(props) => props.theme.mode.colors.text};
  margin-bottom: 1.6rem;
`;
