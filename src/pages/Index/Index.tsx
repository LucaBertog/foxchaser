import React from 'react';

import {
  Header,
  CallToAction,
  Summary,
  Statistics,
  CommunityNotices,
  End,
  Footer,
} from '../../components/Index/index';
import { Container, Banner, Separator } from './Index.styles';

const Home: React.FC = () => (
  <Container>
    <Banner>
      <Header />
      <CallToAction />
      <Summary />
    </Banner>
    <Separator color='#f3f3f3' />
    <Statistics />
    <Separator color='#1D222E' />
    <CommunityNotices />
    <End />
    <Footer />
  </Container>
);

export default Home;
