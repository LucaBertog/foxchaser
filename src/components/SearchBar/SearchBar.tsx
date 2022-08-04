/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import { skipToken } from '@reduxjs/toolkit/dist/query';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
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
  User,
  Avatar,
  Name,
  Username,
  Title,
} from './SearchBar.styles';
import NoPPImg from '../../assets/imgs/NoPP.png';
import LogoLoader from '../LogoLoader/LogoLoader';

Modal.setAppElement('#root');

const SearchBar: React.FC<{ isMobile?: true | undefined }> = ({ isMobile }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [query, setQuery] = useState<string>();
  const { data: results, isLoading } = useDoSearchQuery(query || skipToken);
  const usersExistsQuery =
    results?.usersResult.length && results?.usersResult.length > 0 && query;

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
        {usersExistsQuery
          ? results?.usersResult.map((user) => (
              <Link
                to={`/profile/${user.username}`}
                onClick={closeModal}
                key={user.id}
              >
                <User>
                  <Avatar src={user.profilePicture.split(' ')[0] || NoPPImg} />
                  <Name>{user.name}</Name>
                  <Username>@{user.username}</Username>
                </User>
              </Link>
            ))
          : ''}
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
