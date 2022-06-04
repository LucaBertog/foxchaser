import styled, { css } from 'styled-components';
import {
  Home as HomeIcon,
  ChatDots,
  Bell,
  Search as SearchIcon,
  GameController,
  Newspaper,
} from 'akar-icons';

export const iconCSS = css`
  width: 2.4rem;
  height: 2.4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

const WrapperGame = css`
  background: ${(props) => props.theme.mode.colors.bgIconGame};

  &:hover {
    background: ${(props) => props.theme.mode.colors.bgIconGame};
  }
`;

const WrapperGames = css`
  &:hover {
    background: ${(props) => props.theme.mode.colors.bgIconsGames};
  }
`;

export const IconWrapper = styled.div<{
  isGame?: boolean;
  isSmall?: boolean;
  isGames?: boolean;
}>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isSmall
      ? 'min-width: 3rem;min-height: 3rem;'
      : 'min-width: 4rem;min-height: 4rem;'}

  border-radius: 100%;
  background: rgba(0, 0, 0, 0);

  &:hover {
    background: ${(props) => props.theme.mode.colors.bgIconLight};
  }

  ${(props) => props.isGame && WrapperGame}
  ${(props) => props.isGames && WrapperGames}
`;

export const MenuAvatar = styled.img`
  width: 4rem;
  height: 4rem;

  border: 2px solid ${(props) => props.theme.mode.colors.iconLight};
  border-radius: 100%;
`;
export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const Search = styled(SearchIcon)`
  ${iconCSS}
`;

export const Home = styled(HomeIcon)`
  ${iconCSS}
`;
export const News = styled(Newspaper)`
  ${iconCSS}
`;
export const Games = styled(GameController)`
  ${iconCSS}
  color: ${(props) => props.theme.mode.colors.iconDark};
`;
export const Notifications = styled(Bell)`
  ${iconCSS}
`;
export const Chat = styled(ChatDots)`
  ${iconCSS}
`;
