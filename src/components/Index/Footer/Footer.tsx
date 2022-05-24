import React from 'react';
import {
  discord,
  facebook,
  instagram,
  twitter,
} from '../../../assets/styles/Icons';

import {
  Container,
  Wrapper,
  SocialMedia,
  Title,
  WrapperMedias,
  WrapperMedia,
  Icon,
  Separator,
  WrapperLinks,
  Link,
} from './Footer.styles';

const Footer: React.FC = () => (
  <Container>
    <Wrapper>
      <SocialMedia>
        <Title>Redes Sociais</Title>
        <WrapperMedias>
          <WrapperMedia>
            <Icon src={twitter} />
            <Link to='#1'>Twitter</Link>
          </WrapperMedia>
          <WrapperMedia>
            <Icon src={instagram} />
            <Link to='#1'>Instagram</Link>
          </WrapperMedia>
          <WrapperMedia>
            <Icon src={facebook} />
            <Link to='#1'>Facebook</Link>
          </WrapperMedia>
          <WrapperMedia>
            <Icon src={discord} />
            <Link to='#1'>Discord</Link>
          </WrapperMedia>
        </WrapperMedias>
      </SocialMedia>
      <Separator />
      <WrapperLinks>
        <Link to='#1'>Sobre</Link>
        <Link to='#1'>Contato</Link>
        <Link to='#1'>Suporte</Link>
        <Link to='#1'>Termos de Serviço</Link>
        <Link to='#1'>Política de Privacidade</Link>
      </WrapperLinks>
    </Wrapper>
  </Container>
);

export default Footer;
