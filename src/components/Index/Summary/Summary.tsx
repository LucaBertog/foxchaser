import React from 'react';

import {
  Container,
  Resume,
  Img,
  Title,
  Text,
  WrapperResumes,
} from './Summary.styles';
import {
  monitorFoxChaser,
  webHelpFoxChaser,
  updatesFoxChaser,
  sendFoxChaser,
} from '../../../assets/styles/Icons';

const Summary: React.FC = () => (
  <Container>
    <WrapperResumes>
      <Resume>
        <Img src={monitorFoxChaser} />
        <Title>Tudo em um só lugar</Title>
        <Text>
          Veja suas estatísticas, conte a seus amigos, saiba quando irá ter
          downgrade da sua arma favorita.
        </Text>
      </Resume>
      <Resume>
        <Img src={webHelpFoxChaser} />
        <Title>Veja guias e ajudas</Title>
        <Text>Aprenda aquela smoke tabelada.</Text>
      </Resume>
      <Resume>
        <Img src={updatesFoxChaser} />
        <Title>Fique atualizado</Title>
        <Text>Não fique pra trás nas rodas de conversa.</Text>
      </Resume>
      <Resume>
        <Img src={sendFoxChaser} />
        <Title>Melhore e publique</Title>
        <Text>
          Publique na comunidade e receba feedback’s de outros do chat.
        </Text>
      </Resume>
    </WrapperResumes>
  </Container>
);

export default Summary;
