import React from 'react';
import moment from 'moment';
// import 'moment/locale/pt-br';

import {
  Container,
  PostHeader,
  LeftWrapper,
  UserImage,
  UserInfo,
  Wrapper,
  Username,
  Emblems,
  Separator,
  PostCategory,
  PostType,
  RightWrapper,
  MoreOptions,
  Content,
  PostFooter,
  Like,
  Comment,
  Share,
  Save,
  PostingTime,
  Image,
  Button,
  LikeIcon,
  CommentIcon,
  ShareIcon,
} from './Post.styles';
import { useGetUserByIdQuery } from '../../services/api/user.api';

// moment.locale('pt-br');

const Post: React.FC<{ userId: string; image: string; postDate: string }> = ({
  userId,
  image,
  postDate,
}) => {
  const { data: user } = useGetUserByIdQuery(userId);

  return (
    <Container>
      <PostHeader>
        <LeftWrapper>
          <UserImage src={user?.user.profilePicture.split(' ')[0]} />
          <UserInfo>
            <Wrapper>
              <Username>{user?.user.name}</Username>
              <Emblems />
              <Separator />
              <PostCategory>COD Mobile</PostCategory>
              <PostType color='#006889'>Imagem</PostType>
            </Wrapper>
            <PostingTime>
              {moment(postDate).locale('pt-br').calendar()}
            </PostingTime>
          </UserInfo>
        </LeftWrapper>
        <RightWrapper>
          <MoreOptions />
        </RightWrapper>
      </PostHeader>
      <Content>
        <Image url={image} />
      </Content>
      <PostFooter>
        <LeftWrapper>
          <Button>
            <LikeIcon />
            <Like>Curtir</Like>
          </Button>
          <Button>
            <CommentIcon />
            <Comment>Comentar</Comment>
          </Button>
          <Button>
            <ShareIcon />
            <Share>Compartilhar</Share>
          </Button>
        </LeftWrapper>
        <RightWrapper>
          <Save />
        </RightWrapper>
      </PostFooter>
    </Container>
  );
};

export default Post;
