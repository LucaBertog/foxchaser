import { skipToken } from '@reduxjs/toolkit/dist/query';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDoSearchQuery } from '../../services/api/search.api';
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
  Results,
  Title,
} from './SearchBar.styles';
import LogoLoader from '../LogoLoader/LogoLoader';
import UsersResult from './UsersResult/UsersResult';

Modal.setAppElement('#root');

const SearchBar: React.FC<{ isMobile?: true | undefined }> = ({ isMobile }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [query, setQuery] = useState<string>();
  const { data: results, isLoading } = useDoSearchQuery(query || skipToken);

  const openModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeModal = () => {
    setIsSearchModalOpen(false);
  };

  const resultsElement = () => {
    if (isLoading) return <LogoLoader />;
    return (
      <Results>
        <Title>Usuários</Title>
        <UsersResult query={query} results={results} closeModal={closeModal} />
      </Results>
    );
  };

  useEffect(() => {
    if (isSearchModalOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'unset';
  }, [isSearchModalOpen]);

  return (
    <Container isMobile={isMobile}>
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
            onChange={(e) => setQuery(e.target.value)}
          />
          <WrapperButton>
            <CloseButton onClick={closeModal} />
          </WrapperButton>
        </Header>
        {query ? resultsElement() : ''}
      </Modal>
    </Container>
  );
};

export default SearchBar;
