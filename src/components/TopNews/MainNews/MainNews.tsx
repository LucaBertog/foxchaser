import React from 'react';

import { Container, ImgWrapper, Img, SaveNews } from './MainNews.styles';
import {
  ContentWrapper,
  Info,
  Logo,
  FontName,
  FloatCircle,
  NewsDate,
  Title,
} from '../News.styles';
import enemyLogo from '../../../assets/svgs/EnemyLogo.svg';
import imgMainNews from '../../../assets/imgs/MainNews.png';

const MainNews: React.FC = () => (
  <Container>
    <ImgWrapper>
      <Img url={imgMainNews} />
      <SaveNews />
    </ImgWrapper>
    <ContentWrapper>
      <Info>
        <Logo src={enemyLogo} />
        <FontName>The Enemy</FontName>
        <FloatCircle />
        <NewsDate>11 de Abril de 2022</NewsDate>
      </Info>
      <Title>VALORANT Masters: NiP estreia com vitória em cima da Fnatic</Title>
    </ContentWrapper>
  </Container>
);

export default MainNews;
