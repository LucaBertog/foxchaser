import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Wrapper, Logo, Button } from './End.styles';
import { logoDifferent } from '../../../assets/styles/Icons';

const End: React.FC = () => (
  <Container>
    <Wrapper>
      <Logo src={logoDifferent} />
      <Link to='/register'>
        <Button>
          <span>Criar uma conta</span>
        </Button>
      </Link>
    </Wrapper>
  </Container>
);

export default End;
