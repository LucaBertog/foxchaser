import React from 'react';
import { Container, Image, Name } from './Channel.styles';
import NoPP from '../../../../../assets/imgs/NoPP.png';

const Channel: React.FC<{ isSelected?: boolean }> = ({ isSelected }) => (
  <Container isSelected={isSelected}>
    <Image src={NoPP} />
    <Name>Churumelas</Name>
  </Container>
);

export default Channel;
