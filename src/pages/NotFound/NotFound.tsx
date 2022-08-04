import React from 'react';

import { Container, Title, Message, Watermark } from './NotFound.styles';
import watermarkImg from '../../assets/imgs/Watermark.png';

const NotFound: React.FC = () => (
  <Container>
    <Title>404</Title>
    <Message>Página não encontrada</Message>
    <Watermark src={watermarkImg} />
    <Watermark src={watermarkImg} />
  </Container>
);

export default NotFound;
