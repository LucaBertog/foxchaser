import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  InfoWrapper,
  Title,
  Description,
  ButtonsWrapper,
  BtnCreateAccount,
  BtnNoLogin,
  Wrapper,
} from './CallToAction.styles';

const CallToAction: React.FC = () => (
  <Container>
    <Wrapper>
      <InfoWrapper>
        <Title>Sua plataforma gamer</Title>
        <Description>O que você precisa, você encontra aqui.</Description>
      </InfoWrapper>
      <ButtonsWrapper>
        <BtnCreateAccount>
          <Link to='/register/'>Criar uma conta</Link>
        </BtnCreateAccount>
        <BtnNoLogin>
          <Link to='/home/'>Entrar sem login</Link>
        </BtnNoLogin>
      </ButtonsWrapper>
    </Wrapper>
  </Container>
);

export default CallToAction;
