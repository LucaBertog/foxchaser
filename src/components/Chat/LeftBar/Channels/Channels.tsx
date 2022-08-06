import React from 'react';
import Channel from './Channel/Channel';

import { Container } from './Channels.styles';

const Channels: React.FC = () => (
  <Container>
    <Channel isSelected />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
    <Channel />
  </Container>
);

export default Channels;
