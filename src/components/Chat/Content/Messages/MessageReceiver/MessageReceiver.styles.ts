import styled from 'styled-components';
import * as fonts from '../../../../../assets/styles/Fonts';

export const Container = styled.div`
  max-width: 75%;

  display: flex;
  align-self: flex-start;
  gap: 0.8rem;
`;

export const Message = styled.p`
  ${fonts.Paragraph}
  color: ${(props) => props.theme.mode.colors.text};
  padding: 1rem 1.6rem;

  background: ${(props) => props.theme.mode.colors.bgGamesWrapper};
  border-radius: 0 1.6rem 1.6rem 1.6rem;
`;
export const Avatar = styled.img`
  min-width: 3.2rem;
  min-height: 3.2rem;
  max-width: 3.2rem;
  max-height: 3.2rem;

  border: 2px solid ${(props) => props.theme.mode.colors.iconLight};
  border-radius: 100%;
`;
