import React from 'react';
import { Link } from 'react-router-dom';

import largeLogo from '../../../assets/svgs/large-logo.svg';
import { Container, Logo, Button, Wrapper } from './Header.styles';

const Header: React.FC = () => (
  <Container>
    <Wrapper>
      <Logo src={largeLogo} />
      <Link to='/login'>
        <Button>
          <span>Iniciar sessão</span>
        </Button>
      </Link>
    </Wrapper>
  </Container>
);

export default Header;
