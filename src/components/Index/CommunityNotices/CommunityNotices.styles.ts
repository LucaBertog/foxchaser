import styled, { css } from 'styled-components';
import { between } from 'polished';

import * as fonts from '../../../assets/styles/Fonts';

const Wrappers = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }

  width: 100%;
  max-width: 1000px;
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: min(13.5rem, ${between('8.8rem', '13.5rem', '76.8rem', '144rem')}) 2%
    min(19.5rem, ${between('13.9rem', '19.5rem', '76.8rem', '144rem')});

  background: ${(props) => props.theme.colors.blue4};
`;

export const WrapperCommunity = styled.div`
  ${Wrappers}
  margin-bottom: min(13.4rem, ${between(
    '8rem',
    '13.4rem',
    '76.8rem',
    '144rem'
  )});
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  max-width: 44.8rem;

  text-align: center;

  @media (min-width: 1000px) {
    text-align: left;
    align-items: flex-start;
  }
`;
export const Title = styled.h2`
  font-family: 'IBM Plex Sans';
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 4.8rem;

  color: ${(props) => props.theme.colors.white};

  margin-bottom: 2.1rem;
`;
export const Text = styled.p`
  ${fonts.Paragraph}

  color: ${(props) => props.theme.colors.white};

  margin-bottom: 4.8rem;
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: min(${between('37.5rem', '45.6rem', '76.8rem', '144rem')}, 90%);
`;

export const WrapperNotices = styled.div`
  ${Wrappers}

  @media (min-width: 1000px) {
    flex-direction: row-reverse;
  }

  > ${WrapperContent} {
    @media (min-width: 1000px) {
      text-align: right;
      align-items: flex-end;
    }
  }
`;
