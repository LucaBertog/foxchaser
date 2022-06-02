import styled from 'styled-components';
import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.section`
  background: ${(props) => props.theme.colors.white};
  padding: 8rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 24.8rem;
  height: 23.4rem;
  margin-bottom: 4rem;
`;
export const Button = styled.button`
  padding: 0.5rem 1.6rem;
  background: linear-gradient(92.61deg, #fafafa 1.69%, #e9e9e9 100%);
  border: 0.1rem solid #d7d7d7;
  border-radius: 1.6rem;
  ${fonts.ButtonFont}
`;
