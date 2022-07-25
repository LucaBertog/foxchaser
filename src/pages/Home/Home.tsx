import React from 'react';
import { Container, Main } from './Home.styles';
import { OfferCards, StatisticSummary, TopNews } from '../../components';

const Home: React.FC = () => (
  <Container>
    <Main>
      <StatisticSummary />
      <TopNews />
      <OfferCards />
    </Main>
  </Container>
);

export default Home;
