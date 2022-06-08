import React from 'react';

import { Container, Main } from './Home.styles';
import { StatisticSummary, TopNews } from '../../components';

const Home: React.FC = () => (
  <Container>
    <Main>
      <StatisticSummary />
      <TopNews />
    </Main>
  </Container>
);

export default Home;
