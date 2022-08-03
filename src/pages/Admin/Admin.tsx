import React from 'react';

import {
  Container,
  Sidebar,
  Wrapper,
  Logo,
  Nav,
  RecordsNav,
  RecordNavIcon,
  RecordNavMessage,
  UserWrapper,
  Avatar,
  Name,
  LogoutWrapper,
  Logout,
  LogoutMessage,
  Main,
  Title,
  Subtitle,
  Table,
} from './Admin.styles';
import { largeLogoFoxChaser } from '../../assets/styles/Icons';

const Admin: React.FC = () => (
  <Container>
    <Sidebar>
      <Wrapper>
        <Logo src={largeLogoFoxChaser} />
        <Nav>
          <RecordsNav>
            <RecordNavIcon />
            <RecordNavMessage>Registros</RecordNavMessage>
          </RecordsNav>
        </Nav>
      </Wrapper>
      <Wrapper>
        <UserWrapper>
          <Avatar />
          <Name>Teste</Name>
        </UserWrapper>
        <LogoutWrapper>
          <Logout />
          <LogoutMessage>Cair fora</LogoutMessage>
        </LogoutWrapper>
      </Wrapper>
    </Sidebar>
    <Main>
      <Title>Registros</Title>
      <Subtitle>Tabela de usuários</Subtitle>
      <Table />
    </Main>
  </Container>
);

export default Admin;
