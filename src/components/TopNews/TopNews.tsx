import React from 'react';

import { Container, Separator } from './TopNews.styles';
import MainNews from './MainNews/MainNews';
import OtherTopNews from './OtherTopNews/OtherTopNews';

const TopNews: React.FC = () => (
  <Container>
    <Separator />
    <MainNews />
    <Separator />
    <OtherTopNews />
    <Separator />
    <OtherTopNews />
    <Separator />
  </Container>
);

export default TopNews;
