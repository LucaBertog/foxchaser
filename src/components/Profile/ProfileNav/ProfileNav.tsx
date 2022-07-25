import React from 'react';

import { Container, Link } from './ProfileNav.styles';

const NavProfile: React.FC = () => (
  <Container>
    <Link to='#1'>Feed</Link>
    <Link to='#1'>Estatísticas</Link>
    <Link to='#1'>Salvos</Link>
    <Link to='#1'>Amigos</Link>
    <Link to='#1'>Mídia</Link>
  </Container>
);

export default NavProfile;
