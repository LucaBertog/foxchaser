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
  width: 100%;

  z-index: 2;

  position: fixed;
  left: 0;
  bottom: 5.6rem;

  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    top: 70%;
    bottom: auto;
    padding: 0 calc(4.8rem + 1.6rem) 0 calc(7.8rem + 4.8rem);
  }

  @media (min-width: 1100px) {
    padding: 0 4.8rem 0 calc(7.8rem + 4.8rem);
  }

  @media (min-width: 1400px) {
    padding: 0;
    padding-left: 7.8rem;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 120rem;
    width: 100%;
  }
`;

export const MenuWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;

    width: 100%;

    position: relative;
  }

  @media (min-width: 1100px) {
    display: flex;
    justify-content: flex-end;

    width: 70%;
    padding-right: 4.8rem;
  }

  @media (min-width: 1400px) {
    padding: 0 4.8rem 0 0;
  }
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

  border-radius: 100% 0 0 0;
  padding: 2rem 0 0 2rem;

  @media (min-width: 768px) {
    padding: 0;
    border-radius: 50%;
  }
  cursor: pointer;
  transition: transform 1.25s;
`;

export const Menu = styled.ul`
  position: absolute;
  right: 0;
  bottom: 0;

  transform: translate(30%, 30%);

  @media (min-width: 768px) {
    transform: none;

    right: auto;
    bottom: auto;
    transform: translateX(50%);
  }

  @media (min-width: 1100px) {
    right: auto;
    bottom: auto;
    transform: translateX(50%);
  }

  width: 20rem;
  height: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Li} {
    position: absolute;
    list-style: none;

    left: 1rem;
    bottom: 7rem;
    transform-origin: 9.5rem;
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
    transform: rotate(0) translateX(10rem);

    @media (min-width: 768px) {
      bottom: auto;
      transform-origin: 9rem;
      transform: rotate(0) translateX(6rem);
    }

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      background: ${(props) => props.theme.mode.colors.button1};
      border-radius: 50%;
      transform: rotate(calc(360deg / -7.5 * var(--i)));
      @media (min-width: 768px) {
        transform: rotate(calc(360deg / -7 * var(--i)));
      }
    }
  }

  &.active ${Li} {
    transform: rotate(calc(360deg / 7.5 * var(--i)));
    @media (min-width: 768px) {
      transform: rotate(calc(360deg / 7 * var(--i)));
    }
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
