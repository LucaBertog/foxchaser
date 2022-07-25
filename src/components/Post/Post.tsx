import React from 'react';

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
import emptyImg from '../../assets/imgs/empty.jpg';
import exampleContent from '../../assets/imgs/exampleContent.png';

const Post: React.FC = () => (
  <Container>
    <PostHeader>
      <LeftWrapper>
        <UserImage src={emptyImg} />
        <UserInfo>
          <Wrapper>
            <Username>Gerog</Username>
            <Emblems />
            <Separator />
            <PostCategory>COD Mobile</PostCategory>
            <PostType color='#006889'>Imagem</PostType>
          </Wrapper>
          <PostingTime>Ontem às 07:08</PostingTime>
        </UserInfo>
      </LeftWrapper>
      <RightWrapper>
        <MoreOptions />
      </RightWrapper>
    </PostHeader>
    <Content>
      <Image url={exampleContent} />
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

export default Post;
