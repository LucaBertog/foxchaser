import styled from 'styled-components';

import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.div<{
  url: string;
  accentColor: string;
}>`
  width: 6rem;
  height: 6rem;
  background-color: green;

  /* position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 12rem;
  height: 13rem;

  background: linear-gradient(
      360deg,
      ${(props) => props.accentColor} 0%,
      rgba(0, 0, 0, 0) 82.15%
    ),
    url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  border-radius: 1.6rem;

  flex-shrink: 0;

  cursor: pointer;

  user-select: none; */
`;

export const WrapperLogo = styled.div`
  position: relative;

  align-self: flex-end;
  margin-right: 1.6rem;

  width: 2rem;
  height: 3.2rem;

  background-color: ${(props) => props.color};
  border-radius: 0px 0px 24px 24px;
`;
export const EnterpriseLogo = styled.div<{ url: string }>`
  min-width: 1.6rem;
  min-height: 1.6rem;
  background-color: ${(props) => props.theme.mode.colors.iconLight};
  mask: url(${(props) => props.url}) no-repeat center / contain;

  position: absolute;
  bottom: 0.7rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.6rem 1rem;
`;
export const GameName = styled.p`
  ${fonts.CaptarN}
  color: ${(props) => props.theme.mode.colors.text};

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  margin-bottom: 0.4rem;
`;
export const WrapperDiscount = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Discount = styled.p<{ accentColor: string }>`
  ${fonts.CaptarN}
  color: ${(props) => props.theme.mode.colors.text};
  background-color: ${(props) => props.accentColor};

  padding: 0.2rem 0.5rem;
  border-radius: 2.4rem;
`;
export const Price = styled.p`
  ${fonts.Captar}
  color: ${(props) => props.theme.mode.colors.text};
`;
