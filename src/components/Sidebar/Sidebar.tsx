import React from 'react';

import RecentlySaved from './RecentlySaved/RecentlySaved';
import { SearchBar } from '..';
import { Container } from './Sidebar.styles';

const Sidebar: React.FC = () => (
  <Container>
    <SearchBar />
    <RecentlySaved />
  </Container>
);

export default Sidebar;
