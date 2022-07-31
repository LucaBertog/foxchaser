import styled, { css } from 'styled-components';
import {
  ChatBubble,
  Heart,
  MoreHorizontalFill,
  Ribbon,
  ShareBox,
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoreOptions = styled(MoreHorizontalFill)`
  ${iconCSS}
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > div > img {
    width: 100%;
    max-height: 80rem;
    object-fit: cover;

    border-radius: 1.6rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 80rem;
  object-fit: cover;

  border-radius: 1.6rem;
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
`;
export const CommentIcon = styled(ChatBubble)`
  ${iconCSS}
`;
export const ShareIcon = styled(ShareBox)`
  ${iconCSS}
`;

export const Like = styled.p`
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
  margin: 0 2.4rem 0 0.8rem;
`;

export const Comment = styled.p`
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
  margin: 0 2.4rem 0 0.8rem;
`;

export const Share = styled.p`
  ${fonts.Small}
  color: ${(props) => props.theme.mode.colors.text};
  margin: 0 2.4rem 0 0.8rem;
`;

export const Save = styled(Ribbon)`
  ${iconCSS}
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(6, 9, 17, 0.9);
  z-index: 999;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: contain;
    width: 100%;
    max-height: 100vh;
  }
`;
