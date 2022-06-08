import React from 'react';

import { Container } from './TopNews.styles';
import MainNews from './MainNews/MainNews';
import OtherTopNews from './OtherTopNews/OtherTopNews';

const TopNews: React.FC = () => (
  <Container>
    <MainNews />
    <OtherTopNews />
  </Container>
);

export default TopNews;
