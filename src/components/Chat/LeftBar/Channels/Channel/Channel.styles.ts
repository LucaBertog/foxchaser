import styled from 'styled-components';
import * as fonts from '../../../../../assets/styles/Fonts';

export const Container = styled.div<{ isSelected?: boolean }>`
  user-select: none;

  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  border-radius: 1.6rem;
  padding: 0.8rem 1.6rem;

  ${(props) =>
    props.isSelected
      ? `background: ${props.theme.mode.colors.bgGamesWrapper};`
      : ''}

  cursor: pointer;
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;

  border: 2px solid ${(props) => props.theme.mode.colors.iconLight};
  border-radius: 100%;
`;

export const Name = styled.p`
  ${fonts.Small}
  line-height: 2rem;
  color: ${(props) => props.theme.mode.colors.text};

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Status = styled.p`
  ${fonts.Small}
  line-height: 2rem;
  color: ${(props) => props.theme.mode.colors.weakText};
`;
