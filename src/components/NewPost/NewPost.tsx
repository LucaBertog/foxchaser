import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Menu,
  Toggle,
  Li,
  Plus,
  PencilIcon,
  ImageIcon,
  CheckIcon,
} from './NewPost.styles';

const NewPost: React.FC = () => {
  const menuEl = useRef<any>();

  return (
    <Container>
      <Menu ref={menuEl}>
        <Toggle onClick={() => menuEl.current.classList.toggle('active')}>
          <Plus />
        </Toggle>
        <Li rotate={0}>
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
    </Container>
  );
};

export default NewPost;
