import React from 'react';
import { Container, Image, Name } from './Channel.styles';
import NoPP from '../../../../../assets/imgs/NoPP.png';

const Channel: React.FC<{
  onClick: () => void;
  isSelected: boolean;
  image: string;
  name: string;
}> = ({ onClick, isSelected, image, name }) => (
  <Container onClick={onClick} isSelected={isSelected}>
    <Image src={image?.split(' ')[0] || NoPP} />
    <Name>{name}</Name>
  </Container>
);

export default Channel;
