import styled, { css } from 'styled-components';
import { ChevronLeft, ChevronRight } from 'akar-icons';

const iconCSS = css`
  width: 2.4rem;
  height: 2.4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

export const Container = styled.section`
  position: relative;

  margin-top: 4.8rem;

  display: flex;
  align-items: center;

  width: 100%;

  .glide__track {
    width: 90%;
    flex: 1;
  }

  .glide__slides {
    display: flex;
  }

  .glide__arrows {
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    .glide__arrow {
      cursor: pointer;
      height: 100%;
    }

    .glide__arrow--left {
      background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.4) 0%,
        ${(props) => props.theme.mode.colors.body} 100%
      );
      position: absolute;
      left: 0;
    }

    .glide__arrow--right {
      background: linear-gradient(
        270deg,
        ${(props) => props.theme.mode.colors.body} 0%,
        rgba(0, 0, 0, 0.4) 100%
      );
      position: absolute;
      right: 0;
    }
  }

  overflow: hidden;
`;

export const ArrowLeft = styled(ChevronLeft)`
  ${iconCSS}
`;
export const ArrowRight = styled(ChevronRight)`
  ${iconCSS}
`;
