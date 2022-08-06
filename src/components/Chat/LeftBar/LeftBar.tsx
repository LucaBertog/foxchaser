import React from 'react';
import Channels from './Channels/Channels';

import {
  Container,
  ChannelsSearch,
  SearchIcon,
  Separator,
} from './LeftBar.styles';

const LeftBar: React.FC = () => (
  <Container>
    <ChannelsSearch>
      <SearchIcon />
      <span>Pesquisar</span>
    </ChannelsSearch>
    <Separator />
    <Channels />
  </Container>
);

export default LeftBar;
