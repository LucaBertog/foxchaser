import styled from 'styled-components';

import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(6, 9, 17, 0.4);
`;

export const WrapperResumes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 1.6rem 2%;
  max-width: 1400px;
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 27rem;

  margin: 4rem 0;
`;
export const Img = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  @media (min-width: 1440px) {
    width: 7.2rem;
    height: 7.2rem;
  }

  margin-bottom: 2.4rem;
`;
export const Title = styled.h4`
  ${fonts.Title4}
  color: ${(props) => props.theme.colors?.white};
  text-align: center;

  margin-bottom: 0.8rem;
`;
export const Text = styled.p`
  ${fonts.Small}
  color: ${(props) => props.theme.colors?.white};
  text-align: center;
`;
