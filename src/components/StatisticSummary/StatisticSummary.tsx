import React from 'react';

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
      <Graphics />
    </GameStatistic>
  </Container>
);

export default StatisticSummary;
