import React from 'react';

import {
  Container,
  WrapperCommunity,
  WrapperContent,
  Title,
  Text,
  Figure,
  Img,
  WrapperNotices,
} from './CommunityNotices.styles';
import communityImg from '../../../assets/imgs/ComunidadesImagem.png';
import noticesImg from '../../../assets/imgs/NotíciasImagem.png';

const CommunityNotices: React.FC = () => (
  <Container>
    <WrapperCommunity>
      <WrapperContent>
        <Title>Comunidades</Title>
        <Text>
          Você tem alguma dúvida sobre determinado problema em seu jogo?
          Publique ela facilmente com um post rápido. Compartilhe seu mérito com
          uma foto, ou até mesmo um vídeo.
        </Text>
      </WrapperContent>
      <Figure>
        <Img src={communityImg} />
      </Figure>
    </WrapperCommunity>
    <WrapperNotices>
      <WrapperContent>
        <Title>Notícias</Title>
        <Text>
          Se atualize com as principais notícias do seu jogo favorito, acompanhe
          as atualizações, e até saiba quanto foi aquele jogo na classificação
          para o Major.
        </Text>
      </WrapperContent>
      <Figure>
        <Img src={noticesImg} />
      </Figure>
    </WrapperNotices>
  </Container>
);

export default CommunityNotices;
