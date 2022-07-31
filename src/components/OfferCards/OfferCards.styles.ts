import styled, { css } from 'styled-components';
import { ChevronLeft, ChevronRight } from 'akar-icons';

const iconCSS = css`
  width: 2.4rem;
  height: 2.4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

export const Container = styled.section`
  /* position: relative;
  margin-top: 4.8rem;
  width: 100% !important;
  overflow: hidden !important; */
  max-width: 1000px;
  height: 12rem;
  display: flex;
  justify-content: center;
`;

export const ArrowLeft = styled(ChevronLeft)`
  ${iconCSS}
`;
export const ArrowRight = styled(ChevronRight)`
  ${iconCSS}
`;
