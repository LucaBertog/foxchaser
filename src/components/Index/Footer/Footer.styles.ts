import styled from 'styled-components';
import { Link as LinkOld } from 'react-router-dom';

import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(219, 219, 219, 0.5);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  align-items: center;
  padding: 1.6rem 0;

  max-width: 144rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem 6rem;
`;
export const Title = styled.h4`
  ${fonts.Title4}
  color: ${(props) => props.theme.colors?.blue4};
  margin-bottom: 1.6rem;
  @media (min-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;
export const WrapperMedias = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const WrapperMedia = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  margin-right: 1rem;
  @media (min-width: 768px) {
    margin-right: 0;
  }
`;
export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.8rem;
`;
export const Link = styled(LinkOld)`
  ${fonts.Small}
  color: ${(props) => props.theme.colors?.blue4};
  text-decoration: none;
`;
export const Separator = styled.div`
  width: 24.8rem;
  height: 0.1rem;
  background: #000;

  @media (min-width: 768px) {
    width: 0.1rem;
    height: 18rem;
  }
`;
export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 1rem 2rem;

  > ${Link} {
    text-align: center;
    width: 17rem;
    margin: 1.2rem 2rem;
  }
`;
