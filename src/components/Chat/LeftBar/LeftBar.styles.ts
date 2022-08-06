import { Search } from 'akar-icons';
import styled from 'styled-components';
import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.div`
  * {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  width: 20%;
  height: 100%;
  background: ${(props) => props.theme.mode.colors.container};

  border-radius: 1.6rem;
  padding: 1.6rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const ChannelsSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: 100%;
  height: 5rem;
  background: ${(props) => props.theme.mode.colors.bgGamesWrapper};

  border-radius: 1.6rem;
  padding: 1.6rem;

  cursor: pointer;

  > span {
    ${fonts.Small}
    color: ${(props) => props.theme.mode.colors.text};
  }
`;

export const SearchIcon = styled(Search)`
  min-width: 2rem;
  min-height: 2rem;
  max-height: 2rem;
  max-width: 2rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

export const Separator = styled.div`
  width: 80%;
  min-height: 1px;
  max-height: 1px;
  background: ${(props) => props.theme.mode.colors.iconLight};
  opacity: 0.14;
`;
