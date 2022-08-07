import React from 'react';
import { Container, Image, Name, Wrapper, Status } from './Channel.styles';
import NoPP from '../../../../../assets/imgs/NoPP.png';

const Channel: React.FC<{
  onClick: () => void;
  isSelected: boolean;
  image: string;
  name: string;
  isOnline: boolean;
}> = ({ onClick, isSelected, image, name, isOnline }) => (
  <Container onClick={onClick} isSelected={isSelected}>
    <Image src={image?.split(' ')[0] || NoPP} />
    <Wrapper>
      <Name>{name}</Name>
      <Status>{isOnline ? 'Online' : 'Offline'}</Status>
    </Wrapper>
  </Container>
);

export default Channel;
