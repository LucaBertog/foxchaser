/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Modal,
  Navigation,
  Logo,
  WrapperNav,
  Content,
  WrapperLink,
} from './Auth.styles';
import { logoFoxChaser } from '../../assets/styles/Icons';

// eslint-disable-next-line react/require-default-props
const Auth: React.FC<{ children: JSX.Element; isPageLogin?: boolean }> = ({
  children,
  isPageLogin,
}) => (
  <Container>
    <Modal>
      <Navigation>
        <Link to='/'>
          <Logo src={logoFoxChaser} />
        </Link>
        <WrapperNav isPageLogin={isPageLogin}>
          <WrapperLink>
            <Link to='/register'>Registrar</Link>
          </WrapperLink>
          <WrapperLink>
            <Link to='/login'>Login</Link>
          </WrapperLink>
        </WrapperNav>
      </Navigation>
      <Content>{children}</Content>
    </Modal>
  </Container>
);

export default Auth;
