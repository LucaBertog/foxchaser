import React from 'react';
import StickyBox from 'react-sticky-box';

import RecentlySaved from './RecentlySaved/RecentlySaved';
import { SearchBar } from '..';
import { Container } from './Sidebar.styles';

const Sidebar: React.FC = () => (
  <Container>
    <StickyBox offsetTop={24}>
      <SearchBar />
      <RecentlySaved />
    </StickyBox>
  </Container>
);

export default Sidebar;
