import React, { useEffect, useState } from 'react';

import {
  Container,
  LogoWrapper,
  HeaderWrapper,
  AvatarWrapper,
  GamesWrapper,
  FooterWrapper,
  Wrapper,
  IconWrapper,
  Avatar,
  Exit,
  Bookmark,
  Support,
  Settings,
  Playstation,
  Steam,
  Csgo,
  Valorant,
  RocketLeague,
  Separator,
  ExitWrapper,
} from './NavBar.desktop.styles';
import {
  Logo,
  Home,
  News,
  Games,
  Notifications,
  Chat,
} from '../../assets/styles/IconsNavBar';
import emptyImg from '../../assets/imgs/empty.jpg';
import {
  logoFoxChaser,
  playstation,
  steam,
  csgo,
  valorant,
  rocketLeague,
} from '../../assets/styles/Icons';
import { SearchBar } from '../../components';

const Desktop: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src={logoFoxChaser} />
        </LogoWrapper>
        <HeaderWrapper>
          <AvatarWrapper>
            <ExitWrapper>
              <Exit />
            </ExitWrapper>
            <Avatar src={emptyImg} />
          </AvatarWrapper>
          <IconWrapper>
            <Home />
          </IconWrapper>
          {windowWidth > 768 && windowWidth < 1100 && <SearchBar isMobile />}
          <IconWrapper>
            <Notifications />
          </IconWrapper>
        </HeaderWrapper>
        <GamesWrapper>
          <IconWrapper isGame>
            <Games />
          </IconWrapper>
          <Separator isInsideGames />
          <IconWrapper isGames>
            <Playstation url={playstation} />
          </IconWrapper>
          <IconWrapper isGames>
            <Steam url={steam} />
          </IconWrapper>
          <Separator isSmall isInsideGames />
          <IconWrapper isGames>
            <Csgo url={csgo} />
          </IconWrapper>
          <IconWrapper isGames>
            <Valorant url={valorant} />
          </IconWrapper>
          <IconWrapper isGames>
            <RocketLeague url={rocketLeague} />
          </IconWrapper>
        </GamesWrapper>
        <FooterWrapper>
          <Separator />
          <IconWrapper>
            <News />
          </IconWrapper>
          <IconWrapper>
            <Chat />
          </IconWrapper>
          <IconWrapper>
            <Bookmark />
          </IconWrapper>
          <Separator />
        </FooterWrapper>
      </Wrapper>
      <Wrapper>
        <IconWrapper isSmall>
          <Support />
        </IconWrapper>
        <IconWrapper isSmall>
          <Settings />
        </IconWrapper>
      </Wrapper>
    </Container>
  );
};

export default Desktop;
