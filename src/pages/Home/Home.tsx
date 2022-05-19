import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Header,
  CallToAction,
  Summary,
  Statistics,
  CommunityNotices,
  End,
  Footer,
} from '../../components/Home';
import { Container, Banner, Separator } from './Home.styles';
import { COLORS } from '../../constants';

const Home: React.FC = () => (
  <ThemeProvider theme={{ colors: COLORS }}>
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
  </ThemeProvider>
);

export default Home;
