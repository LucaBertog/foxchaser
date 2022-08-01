/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDeletePostMutation } from '../../../services/api/post.api';
import LogoLoader from '../../LogoLoader/LogoLoader';

import {
  Overlay,
  ModalStyle,
  Warning,
  Wrapper,
  CancelButton,
  ConfirmButton,
  CancelIcon,
  ConfirmIcon,
} from './ConfirmationModalDeletePost.styles';

Modal.setAppElement('#root');

const ConfirmationModalDeletePost: React.FC<{
  isOpen: boolean;
  onRequestClose: any;
  postId: string;
}> = ({ isOpen, onRequestClose, postId }) => {
  const navigate = useNavigate();
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleClickConfirmButton = async () => {
    try {
      await deletePost(postId).unwrap();
      toast.success('Post deletado');
      return navigate(0);
    } catch (error: any) {
      return toast.error('Erro desconhecido');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='_'
      overlayElement={(props, contentElement) => (
        <Overlay {...props}>{contentElement}</Overlay>
      )}
      className='_'
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
    >
      {isLoading ? (
        <LogoLoader />
      ) : (
        <>
          <Warning>Deseja mesmo deletar esse post?</Warning>
          <Wrapper>
            <CancelButton onClick={onRequestClose}>
              <CancelIcon />
              <p>Cancelar</p>
            </CancelButton>
            <ConfirmButton onClick={handleClickConfirmButton}>
              <ConfirmIcon />
              <p>Deletar</p>
            </ConfirmButton>
          </Wrapper>
        </>
      )}
    </Modal>
  );
};

export default ConfirmationModalDeletePost;
