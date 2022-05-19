import React from 'react';

import largeLogo from '../../../assets/svgs/large-logo.svg';
import { Container, Logo, Button, Wrapper } from './Header.styles';

const Header: React.FC = () => (
  <Container>
    <Wrapper>
      <Logo src={largeLogo} />
      <Button>
        <span>Iniciar sessão</span>
      </Button>
    </Wrapper>
  </Container>
);

export default Header;
