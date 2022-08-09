import React, { useEffect } from 'react';
import Modal from 'react-modal';
import ImagePost from './ImagePost/ImagePost';
import { Overlay, ModalStyle } from './ModalNewPost.styles';
import TextPost from './TextPost/TextPost';

Modal.setAppElement('#root');

const ModalNewPost: React.FC<{
  isOpen: boolean;
  onRequestClose: any;
  postType: 'image' | 'text';
}> = ({ isOpen, onRequestClose, postType }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'unset';
  }, [isOpen]);

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
      {postType === 'image' ? (
        <ImagePost isOpen={isOpen} />
      ) : (
        <TextPost isOpen={isOpen} />
      )}
    </Modal>
  );
};

export default ModalNewPost;
