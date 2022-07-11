/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper, WrapperContent } from './Nav.desktop.styles';
import { Logo, WrapperNav, WrapperLink, Content } from '../Auth.styles';
import { logoFoxChaser } from '../../../assets/styles/Icons';
import registerImage from '../../../assets/imgs/registerimage.png';

const Desktop: React.FC<{ children: JSX.Element; isPageLogin: boolean }> = ({
  children,
  isPageLogin,
}) => (
  <Container>
    <Wrapper>
      <Link to='/'>
        <Logo src={logoFoxChaser} />
      </Link>
      <img src={registerImage} alt='Imagem' />
    </Wrapper>
    <WrapperContent>
      <WrapperNav isPageLogin={isPageLogin}>
        <WrapperLink>
          <Link to='/register'>Registrar</Link>
        </WrapperLink>
        <WrapperLink>
          <Link to='/login'>Login</Link>
        </WrapperLink>
      </WrapperNav>
      <Content>{children}</Content>
    </WrapperContent>
  </Container>
);

export default Desktop;
