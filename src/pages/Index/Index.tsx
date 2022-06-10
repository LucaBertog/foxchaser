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
import { Container, Banner, Separator, BakgroundVideo } from './Index.styles';
import videoWebm from '../../assets/videos/banner.webm';
import videoMp4 from '../../assets/videos/banner.mp4';
import thumbnail from '../../assets/imgs/thumbnail.jpg';

const Home: React.FC = () => (
  <Container>
    <Banner>
      <BakgroundVideo autoPlay loop poster={thumbnail}>
        <source src={videoWebm} type='video/webm' />
        <source src={videoMp4} type='video/mp4' />
        Your browser does not support the video tag.
      </BakgroundVideo>
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
