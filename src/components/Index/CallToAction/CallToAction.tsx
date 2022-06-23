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
        <Link to='/register'>
          <BtnCreateAccount>
            <span>Criar uma conta</span>
          </BtnCreateAccount>
        </Link>
        <Link to='/home'>
          <BtnNoLogin>
            <span>Entrar sem login</span>
          </BtnNoLogin>
        </Link>
      </ButtonsWrapper>
    </Wrapper>
  </Container>
);

export default CallToAction;
