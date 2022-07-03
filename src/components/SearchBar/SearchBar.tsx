/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import Modal from 'react-modal';

import {
  Container,
  Wrapper,
  Search,
  Overlay,
  ModalStyle,
  Header,
  SearchField,
  WrapperButton,
  CloseButton,
} from './SearchBar.styles';

Modal.setAppElement('#root');

const SearchBar: React.FC = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const openModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <Container>
      <Wrapper onClick={openModal}>
        <Search />
        <span>Pesquisar</span>
      </Wrapper>
      <Modal
        isOpen={isSearchModalOpen}
        overlayClassName='_'
        overlayElement={(props, contentElement) => (
          <Overlay {...props}>{contentElement}</Overlay>
        )}
        className='_'
        contentElement={(props, children) => (
          <ModalStyle {...props}>{children}</ModalStyle>
        )}
      >
        <Header>
          <SearchField
            type='text'
            name='search'
            placeholder='Escreva sua pesquisa...'
          />
          <WrapperButton>
            <CloseButton onClick={closeModal} />
          </WrapperButton>
        </Header>
      </Modal>
    </Container>
  );
};

export default SearchBar;
