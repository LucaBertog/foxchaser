import React from 'react';

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
          <span>Criar uma conta</span>
        </BtnCreateAccount>
        <BtnNoLogin>
          <span>Entrar sem login</span>
        </BtnNoLogin>
      </ButtonsWrapper>
    </Wrapper>
  </Container>
);

export default CallToAction;
