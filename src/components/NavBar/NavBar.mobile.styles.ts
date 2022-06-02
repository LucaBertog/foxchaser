import styled, { css } from 'styled-components';
import {
  Home as HomeIcon,
  ChatDots,
  Bell,
  Search as SearchIcon,
  GameController,
  Newspaper,
  Person,
} from 'akar-icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;

  width: 100%;
  height: 100vh;
`;

const barCSS = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.8rem 2.4rem;

  width: 100%;
  background: ${(props) => props.theme.mode.colors.navBar};
`;

export const Top = styled.nav`
  ${barCSS}
`;

const iconCSS = css`
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

export const IconWrapper = styled.div<{ isGame?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  border-radius: 100%;
  background: rgba(0, 0, 0, 0);

  &:hover {
    background: ${(props) => props.theme.mode.colors.bgIconLight};
  }

  ${(props) => props.isGame && WrapperGame}
`;

export const MenuAvatar = styled.img`
  width: 4rem;
  height: 4rem;

  border: 1px solid ${(props) => props.theme.mode.colors.iconLight};
  border-radius: 100%;
`;
export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const Search = styled(SearchIcon)`
  ${iconCSS}
`;

export const NewPost = styled.section`
  background: ${(props) => props.theme.mode.colors.button1};
`;

export const Bottom = styled.nav`
  ${barCSS}
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
