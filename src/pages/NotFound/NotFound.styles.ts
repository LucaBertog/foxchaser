import styled from 'styled-components';
import * as fonts from '../../assets/styles/Fonts';

export const Container = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const Title = styled.h1`
  ${fonts.Title1}
  font-size: 11.2rem;
  padding: 1rem;

  background-image: ${(props) => props.theme.colors.button2};
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  margin-bottom: 1.4rem;
`;
export const Message = styled.p`
  ${fonts.Title3}
  color: ${(props) => props.theme.mode.colors.text};
`;

export const Watermark = styled.img`
  overflow: hidden;

  position: absolute;
  right: -10%;
  top: -20%;

  &:first-of-type {
    left: -10%;
    top: 50%;
  }
`;
