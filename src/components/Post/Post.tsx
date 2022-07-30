/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import moment from 'moment';
import Modal from 'react-modal';
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
  Overlay,
  ModalStyle,
} from './Post.styles';
import { useGetUserByIdQuery } from '../../services/api/user.api';

// moment.locale('pt-br');

const Post: React.FC<{ userId: string; image: string; postDate: string }> = ({
  userId,
  image,
  postDate,
}) => {
  const { data: user } = useGetUserByIdQuery(userId);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Image src={image} onClick={() => setIsModalOpen(true)} />
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            overlayClassName='_'
            overlayElement={(props, contentElement) => (
              <Overlay {...props}>{contentElement}</Overlay>
            )}
            className='_'
            contentElement={(props, children) => (
              <ModalStyle {...props}>{children}</ModalStyle>
            )}
          >
            <img src={image} alt='salve' />
          </Modal>
        )}
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
