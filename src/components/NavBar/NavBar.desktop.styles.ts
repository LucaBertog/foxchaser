import styled, { css } from 'styled-components';
import { Door, Ribbon, Flag, Gear } from 'akar-icons';

import {
  IconWrapper as IconWrapperOld,
  MenuAvatar,
  iconCSS,
} from '../../assets/styles/IconsNavBar';

const alignCenterFlex = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.nav`
  ${alignCenterFlex}
  justify-content: space-between;

  background-color: ${(props) => props.theme.mode.colors.container};

  width: 7.8rem;
  height: 100%;
  padding: 2.4rem 0;
  > div:last-of-type > div:last-of-type {
    margin: 0.4rem 0 0 0;
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const IconWrapper = styled(IconWrapperOld)`
  margin: 0.4rem 0;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 1.2rem;
  cursor: pointer;
`;

export const AvatarWrapper = styled.div`
  position: relative;

  width: 5.6rem;
  height: 5.6rem;

  margin: 0.4rem 0;
`;

export const Avatar = styled(MenuAvatar)`
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

export const HeaderWrapper = styled.div`
  ${alignCenterFlex}
`;
export const GamesWrapper = styled.div`
  ${alignCenterFlex}

  overflow-y: auto;
  justify-content: flex-start;
  &::-webkit-scrollbar {
    width: 0;
  }

  width: 100%;
  min-height: 8.2rem;
  padding: 1.2rem 0;
  margin: 0.4rem 0;

  border-radius: 20px;

  background: ${(props) => props.theme.mode.colors.bgGamesWrapper};
`;
export const FooterWrapper = styled.div`
  ${alignCenterFlex}
`;
export const Wrapper = styled.div`
  ${alignCenterFlex}
  width: 100%;

  &:first-of-type {
    overflow-y: auto;
  }
`;

export const ExitWrapper = styled.div`
  ${alignCenterFlex}
  position: absolute;
  right: 0;
  top: 0;

  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.mode.colors.bgIconExit};
  border-radius: 100%;

  cursor: pointer;
`;
export const Exit = styled(Door)`
  ${iconCSS}
  width: 1.4rem;
  height: 1.4rem;
`;
export const Bookmark = styled(Ribbon)`
  ${iconCSS}
`;
export const Support = styled(Flag)`
  ${iconCSS}
  width: 1.6rem;
  height: 1.6rem;
`;
export const Settings = styled(Gear)`
  ${iconCSS}
  width: 1.6rem;
  height: 1.6rem;
`;

const otherIconCss = css<{ url: string }>`
  min-width: 2.4rem;
  min-height: 2.4rem;
  background-color: ${(props) => props.theme.mode.colors.iconLight};
  mask: url(${(props) => props.url}) no-repeat center / contain;
`;

export const Playstation = styled.div`
  ${otherIconCss}
`;
export const Steam = styled.div`
  ${otherIconCss}
`;
export const Csgo = styled.div`
  ${otherIconCss}
`;
export const Valorant = styled.div`
  ${otherIconCss}
`;
export const RocketLeague = styled.div`
  ${otherIconCss}
`;

export const Separator = styled.div<{
  isSmall?: boolean;
  isInsideGames?: boolean;
}>`
  width: ${(props) => (props.isSmall ? '1.6rem' : '3.2rem')};
  min-height: 1px;
  margin: ${(props) => (props.isInsideGames ? '0.4rem 0' : '1.2rem')};
  background-color: rgba(255, 255, 255, 0.25);
`;
