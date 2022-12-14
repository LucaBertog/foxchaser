import styled, { css } from 'styled-components';
import {
  ChatBubble,
  Edit,
  Heart,
  MoreHorizontalFill,
  Ribbon,
  ShareBox,
  TrashCan,
} from 'akar-icons';
import * as fonts from '../../assets/styles/Fonts';

const iconCSS = css`
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme.mode.colors.iconLight};

  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
`;

export const PostHeader = styled.div`
  padding: 1.6rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 100%;

  border: 1px solid ${(props) => props.theme.mode.colors.iconLight};

  margin-right: 0.8rem;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Username = styled.p`
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
`;

export const Emblems = styled.div``;

export const Separator = styled.div`
  width: 3px;
  height: 3px;
  margin: 0 0.8rem;
  border-radius: 100%;
  background: ${(props) => props.theme.mode.colors.text};
`;

export const PostCategory = styled.p`
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
`;

export const PostType = styled.p`
  ${fonts.Captar}
  color: ${(props) => props.theme.mode.colors.text};

  border-radius: 2.4rem;

  padding: 0 0.8rem;
  background: ${(props) => props.color};
`;

export const PostingTime = styled.p`
  ${fonts.Captar}
  color: ${(props) => props.theme.mode.colors.weakText};
`;

export const RightWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoreOptions = styled(MoreHorizontalFill)`
  ${iconCSS}
`;

export const PostFooter = styled.div`
  padding: 1.6rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.div`
  display: flex;
  cursor: pointer;
`;

export const LikeIcon = styled(Heart)`
  ${iconCSS}
  margin: 0 0.8rem 0 0;
`;
export const CommentIcon = styled(ChatBubble)`
  ${iconCSS}
  margin: 0 0.8rem 0 2.4rem;
`;
export const ShareIcon = styled(ShareBox)`
  ${iconCSS}
  margin: 0 0.8rem 0 2.4rem;
`;

export const Like = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
`;

export const Comment = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
`;

export const Share = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
`;

export const Save = styled(Ribbon)`
  ${iconCSS}
`;

export const OptionsWrapper = styled.div<{ isMoreOptionsOpen: boolean }>`
  ${(props) => (props.isMoreOptionsOpen ? `display: block;` : `display: none;`)}

  position: absolute;
  top: 3rem;
  right: 0;

  background: ${(props) => props.theme.mode.colors.iconDark};
  border-radius: 1.6rem;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: 0.8rem 1.6rem;

  &:first-of-type {
    padding: 1.6rem 1.6rem 0.8rem 1.6rem;
    border-radius: 1.6rem 1.6rem 0 0;
  }

  &:last-of-type {
    padding: 0.8rem 1.6rem 1.6rem 1.6rem;
    border-radius: 0 0 1.6rem 1.6rem;
  }

  &:hover {
    background: ${(props) => props.theme.mode.colors.bgIconDark};
  }
`;

export const DeleteIcon = styled(TrashCan)`
  ${iconCSS}
  color: #FF6C6C;
`;

export const EditIcon = styled(Edit)`
  ${iconCSS}
`;

export const Option = styled.p<{ isExclude: boolean }>`
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
  ${(props) => props.isExclude && 'color: #FF6C6C;'}

  margin-left: 0.8rem;
  white-space: nowrap;

  user-select: none;
`;
