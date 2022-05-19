import styled, { css } from 'styled-components';

const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 6.4rem;
  ${flexCenterColumn}
`;

export const Wrapper = styled.div`
  ${flexCenterColumn}
  max-width: 1000px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 17vh;
    margin-bottom: 17vh;
  }
`;

export const InfoWrapper = styled.div`
  ${flexCenterColumn}
  margin-bottom: 4.8rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const Title = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 500;
  font-size: 2.6rem;
  line-height: 4.8rem;

  color: ${(props) => props.theme.colors?.white};
`;
export const Description = styled.p`
  font-family: 'IBM Plex Sans';
  font-weight: 400;
  font-size: 1.4rem;
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
