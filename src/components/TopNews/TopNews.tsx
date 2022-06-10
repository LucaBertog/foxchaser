import React from 'react';

import { Container, Separator, WrapperOtherNews } from './TopNews.styles';
import MainNews from './MainNews/MainNews';
import OtherTopNews from './OtherTopNews/OtherTopNews';

const TopNews: React.FC = () => (
  <Container>
    <Separator />
    <MainNews />
    <Separator />
    <WrapperOtherNews>
      <OtherTopNews />
      <Separator />
      <OtherTopNews />
      <Separator />
    </WrapperOtherNews>
  </Container>
);

export default TopNews;
