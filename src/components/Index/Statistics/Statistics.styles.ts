import styled from 'styled-components';
import { between } from 'polished';

import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10rem 2%;
  overflow-x: hidden;

  background: ${(props) => props.theme.colors?.white};
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 0 2.1rem 0;
`;
export const Line = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: 0.1rem;
  background: ${(props) => props.theme.colors?.orange};
`;
export const Title = styled.h1`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 4.2rem;
  line-height: 4.8rem;

  padding: 1.8rem 0;

  color: ${(props) => props.theme.colors?.blue4};
`;

export const Description = styled.p`
  ${fonts.Paragraph}
  color: ${(props) => props.theme.colors?.blue4};
  text-align: center;
`;

export const Carousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 14rem 0;
`;
export const Img = styled.img`
  height: 20rem;
`;
export const CompatiblePlatforms = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TitlePlatforms = styled.h4`
  ${fonts.Title4}
  color: ${(props) => props.theme.colors?.blue4};
  text-align: center;

  margin-bottom: 1.6rem;
`;
export const WrapperIcons = styled.div`
  width: ${between('24rem', '26rem', '76.8rem', '144rem')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Icon = styled.img`
  width: ${between('4rem', '4.8rem', '76.8rem', '144rem')};
  height: ${between('4rem', '4.8rem', '76.8rem', '144rem')};
`;
