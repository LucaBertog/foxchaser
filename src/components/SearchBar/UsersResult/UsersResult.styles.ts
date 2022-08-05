import { PersonAdd, PersonCross } from 'akar-icons';
import styled, { css } from 'styled-components';
import * as fonts from '../../../assets/styles/Fonts';

const iconCSS = css`
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  color: ${(props) => props.theme.mode.colors.iconLight};

  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.2rem;
  }
`;

export const User = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: ${(props) => props.theme.mode.colors.container};
  padding: 0.8rem 1.6rem;
  border-radius: 1.6rem;

  margin-bottom: 0.8rem;

  > a {
    display: flex;
    align-items: center;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    max-width: 30rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  max-width: 4.8rem;
  max-height: 4.8rem;
  min-width: 4.8rem;
  min-height: 4.8rem;
  border-radius: 100%;
  border: 2px solid ${(props) => props.theme.mode.colors.iconLight};
`;

export const Name = styled.p`
  ${fonts.ParagraphN}
  color: ${(props) => props.theme.mode.colors.text};

  margin: 0 0.8rem 0 1.6rem;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Username = styled.p`
  ${fonts.ParagraphN}
  color: ${(props) => props.theme.mode.colors.weakText};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const FollowIcon = styled(PersonAdd)`
  ${iconCSS}
`;

export const UnfollowIcon = styled(PersonCross)`
  ${iconCSS}
`;
