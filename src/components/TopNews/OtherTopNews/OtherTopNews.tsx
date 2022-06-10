import React from 'react';

import { Container, Img, SaveNews } from './OtherTopNews.styles';
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

const OtherTopNews: React.FC = () => (
  <Container>
    <Img url={imgMainNews} />
    <ContentWrapper>
      <Info>
        <Logo src={enemyLogo} />
        <FontName isOther>The Enemy</FontName>
        <FloatCircle />
        <NewsDate>11 de Abril de 2022</NewsDate>
      </Info>
      <Title isOther>
        VALORANT Masters: NiP estreia com vitória em cima da Fnatic
      </Title>
    </ContentWrapper>
    <SaveNews />
  </Container>
);

export default OtherTopNews;
