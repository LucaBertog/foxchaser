import styled, { css } from 'styled-components';
import { DoubleCheck, Image, Pencil, Plus as PlusIcon } from 'akar-icons';

const iconCSS = css`
  width: 1.6em;
  height: 1.6em;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

export const Li = styled.li<{ rotate: number }>`
  --i: ${(props) => props.rotate};
`;

export const Container = styled.div`
  z-index: 2;

  position: fixed;
  right: 30%;
  top: 70%;

  @media (min-width: 1100px) {
    padding-right: 7rem;
  }

  @media (min-width: 1400px) {
    padding-right: 10%;
  }

  transform: translateX(49%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Toggle = styled.div`
  position: absolute;
  background: ${(props) => props.theme.mode.colors.button1};

  width: 8rem;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 1.25s;
`;

export const Menu = styled.ul`
  position: relative;
  width: 20rem;
  height: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Li} {
    position: absolute;
    list-style: none;

    left: 1rem;
    transform-origin: 9rem;
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
    transform: rotate(0) translateX(6rem);

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      background: ${(props) => props.theme.mode.colors.button1};
      border-radius: 50%;
      transform: rotate(calc(360deg / -7 * var(--i)));
    }
  }

  &.active ${Li} {
    transform: rotate(calc(360deg / 7 * var(--i)));
  }

  &.active ${Toggle} > svg {
    transform: rotate(315deg);
  }
`;

export const Plus = styled(PlusIcon)`
  width: 3.4rem;
  height: 3.4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};

  transition: transform 1.25s;
`;

export const PencilIcon = styled(Pencil)`
  ${iconCSS}
`;
export const ImageIcon = styled(Image)`
  ${iconCSS}
`;
export const CheckIcon = styled(DoubleCheck)`
  ${iconCSS}
`;
