import styled from 'styled-components';
import * as fonts from '../../assets/styles/Fonts';

export const ContentWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-x: scroll;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.8rem;
`;
export const FontName = styled.p<{ isOther?: boolean }>`
  ${fonts.Captar}
  color: ${(props) => props.theme.mode.colors.text};
  margin: ${(props) => (props.isOther ? '0.4rem' : '0.8rem')} 0;
  white-space: nowrap;
  overflow-x: scroll;
`;
export const FloatCircle = styled.div`
  width: 3px;
  height: 3px;
  margin: 0 0.8rem;
  border-radius: 100%;
  background: ${(props) => props.theme.mode.colors.text};
`;
export const NewsDate = styled.p`
  ${fonts.Captar}
  color: ${(props) => props.theme.mode.colors.text};
  white-space: nowrap;
  overflow-x: scroll;
`;

export const Title = styled.h4<{ isOther?: boolean }>`
  ${(props) => (props.isOther ? fonts.N2 : fonts.N)}
  color: ${(props) => props.theme.mode.colors.text};
  white-space: pre-wrap;
  overflow-x: scroll;
  height: 50%;
`;
