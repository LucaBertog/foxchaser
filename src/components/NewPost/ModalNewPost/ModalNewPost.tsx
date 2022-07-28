/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Modal from 'react-modal';

import ImagePost from './ImagePost/ImagePost';
import { Overlay, ModalStyle } from './ModalNewPost.styles';

Modal.setAppElement('#root');

const ModalNewPost: React.FC<{
  isOpen: boolean;
  onRequestClose: any;
}> = ({ isOpen, onRequestClose }) => (
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
    <ImagePost isOpen={isOpen} />
  </Modal>
);

export default ModalNewPost;
