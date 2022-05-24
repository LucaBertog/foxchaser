import styled, { css } from 'styled-components';
import { between } from 'polished';

const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 6.4rem 2%;
  ${flexCenterColumn}
`;

export const Wrapper = styled.div`
  ${flexCenterColumn}
  max-width: 1400px;
  width: 90%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 17vh;
    margin-bottom: 17vh;
  }
`;

export const InfoWrapper = styled.div`
  margin-bottom: 4.8rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
  text-align: center;
`;
export const Title = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 500;
  font-size: ${between('2.6rem', '4.2rem', '37.5rem', '144rem')};
  line-height: 4.8rem;

  color: ${(props) => props.theme.colors?.white};

  @media (min-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;
export const Description = styled.p`
  font-family: 'IBM Plex Sans';
  font-weight: 400;
  font-size: ${between('1.4rem', '1.6rem', '37.5rem', '144rem')};
  line-height: 2.4rem;

  color: ${(props) => props.theme.colors?.white};
`;

export const ButtonsWrapper = styled.div`
  ${flexCenterColumn}
`;
export const BtnCreateAccount = styled.button`
  background: ${(props) => props.theme.colors?.button2};
  filter: drop-shadow(0px 0px 4px #fd9800);

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.4rem;

    color: ${(props) => props.theme.colors?.white};
  }

  padding: 0.5rem 2.4rem;
  border-radius: 1.6rem;

  cursor: pointer;

  margin-bottom: 0.8rem;
`;
export const BtnNoLogin = styled.button`
  font-family: 'IBM Plex Sans';
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;

  background-color: transparent;
  color: ${(props) => props.theme.colors?.white};

  cursor: pointer;
`;
