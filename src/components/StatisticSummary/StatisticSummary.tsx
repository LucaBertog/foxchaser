import React from 'react';
import { chartExample } from '../../assets/styles/Icons';

import {
  Container,
  GameRank,
  GameStatistic,
  Title,
  Graphics,
} from './StatisticSummary.styles';

const StatisticSummary: React.FC = () => (
  <Container>
    <GameRank />
    <GameStatistic>
      <Title>Rankeada 3v3</Title>
      <Graphics src={chartExample} />
    </GameStatistic>
  </Container>
);

export default StatisticSummary;
