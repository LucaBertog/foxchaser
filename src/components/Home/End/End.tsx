import React from 'react';

import { Container, Wrapper, Logo, Button } from './End.styles';
import { logoDifferent } from '../../../assets/styles/Icons';

const End: React.FC = () => (
  <Container>
    <Wrapper>
      <Logo src={logoDifferent} />
      <Button>Criar uma conta</Button>
    </Wrapper>
  </Container>
);

export default End;
