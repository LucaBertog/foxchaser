/* eslint-disable no-underscore-dangle */
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
import {
  useGetAllPostsQuery,
  useGetAllUsersQuery,
} from '../../services/api/admin.api';
import { LogoLoader } from '../../components';

const Admin: React.FC = () => {
  const { data: users, isLoading: loadingUsers } = useGetAllUsersQuery('');
  const { data: posts, isLoading: loadingPosts } = useGetAllPostsQuery('');

  return (
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
        {loadingUsers ? (
          <LogoLoader />
        ) : (
          <div>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                  <th>password</th>
                  <th>profilePicture</th>
                  <th>coverPicture</th>
                  <th>followers</th>
                  <th>followings</th>
                  <th>isAdmin</th>
                  <th>description</th>
                  <th>emblems</th>
                  <th>createdAt</th>
                  <th>updatedAt</th>
                  <th>__v</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user: any) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.profilePicture}</td>
                    <td>{user.coverPicture}</td>
                    <td>{user.followers}</td>
                    <td>{user.followings}</td>
                    <td>{`${user.isAdmin}`}</td>
                    <td>{user.description}</td>
                    <td>{user.emblems}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.updatedAt}</td>
                    <td>{user.__v}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        <Subtitle>Tabela de posts</Subtitle>
        {loadingPosts ? (
          <LogoLoader />
        ) : (
          <div>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>userId</th>
                  <th>title</th>
                  <th>text</th>
                  <th>image</th>
                  <th>likes</th>
                  <th>createdAt</th>
                  <th>updatedAt</th>
                  <th>__v</th>
                </tr>
              </thead>
              <tbody>
                {posts?.map((post: any) => (
                  <tr key={post._id}>
                    <td>{post._id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.text}</td>
                    <td>{post.image}</td>
                    <td>{post.likes}</td>
                    <td>{post.createdAt}</td>
                    <td>{post.updatedAt}</td>
                    <td>{post.__v}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Main>
    </Container>
  );
};

export default Admin;
