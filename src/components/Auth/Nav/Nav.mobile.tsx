/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from './Nav.mobile.styles';
import { Logo, WrapperNav, WrapperLink, Content } from '../Auth.styles';
import { logoFoxChaser } from '../../../assets/styles/Icons';

const Mobile: React.FC<{ children: JSX.Element; isPageLogin: boolean }> = ({
  children,
  isPageLogin,
}) => (
  <>
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
  </>
);

export default Mobile;
