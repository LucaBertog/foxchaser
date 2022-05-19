import React from 'react';

import {
  Container,
  WrapperTitle,
  Line,
  Title,
  Description,
  Carousel,
  Img,
  CompatiblePlatforms,
  TitlePlatforms,
  WrapperIcons,
  Icon,
} from './Statistics.styles';
import csgoImg from '../../../assets/imgs/CSGO.png';
import lolImg from '../../../assets/imgs/LeagueofLegends.png';
import valorantImg from '../../../assets/imgs/VALORANT.png';
import {
  playstation,
  xbox,
  steam,
  epicGames,
} from '../../../assets/styles/Icons';

const Statistics: React.FC = () => (
  <Container>
    <WrapperTitle>
      <Line size='5.8rem' />
      <Title>Estatísticas</Title>
      <Line size='1.6rem' />
    </WrapperTitle>
    <Description>
      Detalhados e variados, de todos os seus jogos favoritos
    </Description>
    <Carousel>
      <Img src={csgoImg} />
      <Img src={lolImg} />
      <Img src={valorantImg} />
    </Carousel>
    <CompatiblePlatforms>
      <TitlePlatforms>Plataformas compatíveis</TitlePlatforms>
      <WrapperIcons>
        <Icon src={playstation} />
        <Icon src={xbox} />
        <Icon src={steam} />
        <Icon src={epicGames} />
      </WrapperIcons>
    </CompatiblePlatforms>
  </Container>
);

export default Statistics;
