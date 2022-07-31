import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalNewPost from './ModalNewPost/ModalNewPost';

import {
  Container,
  Wrapper,
  MenuWrapper,
  Menu,
  Toggle,
  Li,
  Plus,
  PencilIcon,
  ImageIcon,
  CheckIcon,
} from './NewPost.styles';

const NewPost: React.FC = () => {
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const menuEl = useRef<any>();

  const openNewPostModal = () => {
    setIsNewPostModalOpen(true);
  };

  const closeNewPostModal = () => {
    setIsNewPostModalOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <MenuWrapper>
          <Menu ref={menuEl}>
            <Toggle onClick={() => menuEl.current.classList.toggle('active')}>
              <Plus />
            </Toggle>
            <Li rotate={0} onClick={openNewPostModal}>
              <Link to='#1'>
                <ImageIcon />
              </Link>
            </Li>
            <Li rotate={1}>
              <Link to='#1'>
                <PencilIcon />
              </Link>
            </Li>
            <Li rotate={2}>
              <Link to='#1'>
                <CheckIcon />
              </Link>
            </Li>
          </Menu>
          <ModalNewPost
            isOpen={isNewPostModalOpen}
            onRequestClose={closeNewPostModal}
          />
        </MenuWrapper>
      </Wrapper>
    </Container>
  );
};

export default NewPost;
