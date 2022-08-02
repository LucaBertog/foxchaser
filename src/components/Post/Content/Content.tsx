import React, { useState } from 'react';
import Modal from 'react-modal';
import { Container, Image, ModalStyle, Overlay, Text } from './Content.styles';

Modal.setAppElement('#root');

const Content: React.FC<{ image?: string; text?: string }> = ({
  image,
  text,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checkPostType = () => {
    if (text) {
      return <Text>{text}</Text>;
    }
    if (image) {
      return (
        <>
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
        </>
      );
    }

    return '';
  };

  return <Container>{checkPostType()}</Container>;
};

export default Content;
