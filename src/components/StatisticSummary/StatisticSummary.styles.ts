import styled, { css } from 'styled-components';
import * as fonts from '../../assets/styles/Fonts';

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const containerCSS = css`
  width: 100%;
  height: 13.2rem;

  border-radius: 1.6rem;
  background: ${(props) => props.theme.mode.colors.container};
  padding: 1.6rem;
`;

export const GameRank = styled.div`
  ${containerCSS}
  @media (min-width: 768px) {
    width: 50%;
    margin-right: 2.4rem;
  }
`;
export const GameStatistic = styled.div`
  display: flex;
  flex-direction: column;
  ${containerCSS}
`;
export const Title = styled.h4`
  ${fonts.Title4}
  color: ${(props) => props.theme.mode.colors.text};
  margin-bottom: 0.8rem;
`;
export const Graphics = styled.img`
  width: 100%;
  max-height: 7rem;
`;
