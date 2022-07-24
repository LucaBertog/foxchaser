import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import thumbnail from '../../assets/imgs/thumbnail.png';
import { selectToken } from '../../store/Auth/reducer';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      navigate('/home/');
    }
  }, [token, navigate]);

  return (
    <Container>
      <Banner>
        <BakgroundVideo autoPlay muted loop poster={thumbnail}>
          <source src={videoMp4} type='video/mp4' />
          <source src={videoWebm} type='video/webm' />
          Your browser does not support the video tag.
        </BakgroundVideo>
        <Header />
        <CallToAction />
        <Summary />
      </Banner>
      <Separator color='#f3f3f3' />
      <div id='trigger1' />
      <Statistics />
      <Separator color='#1D222E' />
      <CommunityNotices />
      <End />
      <Footer />
    </Container>
  );
};

export default Home;
