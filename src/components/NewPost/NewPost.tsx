import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
  const menuEl = useRef<any>();

  return (
    <Container>
      <Wrapper>
        <MenuWrapper>
          <Menu ref={menuEl}>
            <Toggle onClick={() => menuEl.current.classList.toggle('active')}>
              <Plus />
            </Toggle>
            <Link to='/submit/image'>
              <Li rotate={0}>
                <div>
                  <ImageIcon />
                </div>
              </Li>
            </Link>
            <Link to='/submit/wysiwyg'>
              <Li rotate={1}>
                <div>
                  <PencilIcon />
                </div>
              </Li>
            </Link>
            <Link to='#1'>
              <Li rotate={2}>
                <div>
                  <CheckIcon />
                </div>
              </Li>
            </Link>
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </Container>
  );
};

export default NewPost;
