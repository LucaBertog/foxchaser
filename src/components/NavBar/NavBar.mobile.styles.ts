import styled, { css } from 'styled-components';

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
  background: ${(props) => props.theme.mode.colors.iconLight};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  border-radius: 100%;
  background: ${(props) => props.theme.mode.colors.bgIconLight};
`;

export const MenuAvatar = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const SearchIcon = styled.img`
  ${iconCSS}
`;

export const NewPost = styled.section`
  background: ${(props) => props.theme.mode.colors.button1};
`;

export const Bottom = styled.nav`
  ${barCSS}
`;
export const Home = styled.img`
  ${iconCSS}
`;
export const News = styled.img`
  ${iconCSS}
`;
export const Games = styled.img`
  ${iconCSS}
`;
export const Notifications = styled.img`
  ${iconCSS}
`;
export const Chat = styled.img`
  ${iconCSS}
`;
