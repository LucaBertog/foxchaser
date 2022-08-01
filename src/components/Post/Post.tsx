/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useState } from 'react';
import moment from 'moment';
import Modal from 'react-modal';

import { Link } from 'react-router-dom';
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
  OptionsWrapper,
  OptionWrapper,
  DeleteIcon,
  EditIcon,
  Option,
} from './Post.styles';
import { useGetUserByIdQuery } from '../../services/api/user.api';
import { configPtBr } from '../../utils/momentjs-pt-br.utils';
import ConfirmationModalDeletePost from './ConfirmationModalDeletePost/ConfirmationModalDeletePost';
import { UserContext } from '../../contexts/User.context';

Modal.setAppElement('#root');
moment.updateLocale('pt-br', configPtBr);

const Post: React.FC<{
  userId: string;
  postId: string;
  image: string;
  postDate: string;
}> = ({ userId, postId, image, postDate }) => {
  const { id: currentUserId } = useContext(UserContext);
  const { data: user } = useGetUserByIdQuery(userId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
  const [
    isConfirmationModalDeletePostOpen,
    setIsConfirmationModalDeletePostOpen,
  ] = useState(false);

  return (
    <Container>
      <PostHeader>
        <LeftWrapper>
          <Link to={`/profile/${user?.user.username}`}>
            <UserImage src={user?.user.profilePicture.split(' ')[0]} />
          </Link>
          <UserInfo>
            <Wrapper>
              <Link to={`/profile/${user?.user.username}`}>
                <Username>{user?.user.name}</Username>
                <Emblems />
              </Link>
              <Separator />
              <PostCategory>COD Mobile</PostCategory>
              <PostType color='#006889'>Imagem</PostType>
            </Wrapper>
            <PostingTime>{moment(postDate).calendar()}</PostingTime>
          </UserInfo>
        </LeftWrapper>
        <RightWrapper>
          <MoreOptions
            onClick={() => setIsMoreOptionsOpen(!isMoreOptionsOpen)}
          />
          <OptionsWrapper isMoreOptionsOpen={isMoreOptionsOpen}>
            {currentUserId === userId ? (
              <>
                <OptionWrapper>
                  <DeleteIcon />
                  <Option
                    onClick={() => setIsConfirmationModalDeletePostOpen(true)}
                    isExclude
                  >
                    Excluir postagem
                  </Option>
                </OptionWrapper>
                <OptionWrapper>
                  <EditIcon />
                  <Option isExclude={false}>Editar postagem</Option>
                </OptionWrapper>
              </>
            ) : (
              <>
                <OptionWrapper>
                  <EditIcon />
                  <Option isExclude={false}>Reportar postagem</Option>
                </OptionWrapper>
                <OptionWrapper>
                  <EditIcon />
                  <Option isExclude={false}>Bloquear</Option>
                </OptionWrapper>
                <OptionWrapper>
                  <EditIcon />
                  <Option isExclude={false}>Silenciar</Option>
                </OptionWrapper>
              </>
            )}
          </OptionsWrapper>
        </RightWrapper>
      </PostHeader>
      <Content>
        <Image src={image} onClick={() => setIsModalOpen(true)} />
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
      <ConfirmationModalDeletePost
        isOpen={isConfirmationModalDeletePostOpen}
        onRequestClose={() => setIsConfirmationModalDeletePostOpen(false)}
        postId={postId}
      />
    </Container>
  );
};

export default Post;
