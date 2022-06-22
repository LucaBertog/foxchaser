import styled, { css } from 'styled-components';
import { ChevronLeft, ChevronRight } from 'akar-icons';

const iconCSS = css`
  width: 2.4rem;
  height: 2.4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

export const Container = styled.section`
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
    background: ${(props) => props.theme.mode.colors.body};

    .glide__arrow {
      background: none;
      height: 100%;
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
