import styled from 'styled-components';
import { Link as OldLink } from 'react-router-dom';
import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.div`
  position: relative;
  bottom: -4rem;

  width: 100%;
  background: ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem;

  padding: 1.6rem 5.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(OldLink)`
  ${fonts.Paragraph}
  color: ${(props) => props.theme.mode.colors.text};
  text-decoration: none;
`;
