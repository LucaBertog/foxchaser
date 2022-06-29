import styled from 'styled-components';

import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem;

  padding: 1.6rem 2.4rem;

  margin: 2.4rem 0;
`;

export const Title = styled.h6`
  ${fonts.SmallN}
  color: ${(props) => props.theme.mode.colors.text};
`;
