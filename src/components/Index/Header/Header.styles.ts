import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem max(2.4rem, 5%);

  background-color: rgba(6, 9, 17, 0.5);
  backdrop-filter: blur(4px);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;

  & > a {
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  width: max(13.3rem, min(38%, 19.8rem));
  height: max(1.8rem, min(30%, 2.8rem));
`;
export const Button = styled.button`
  width: 15.6rem;
  height: 2.8rem;

  border-radius: 1.6rem;

  background: linear-gradient(
    91.55deg,
    rgba(29, 33, 46, 0.5) 0.33%,
    rgba(49, 52, 62, 0.5) 102.14%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);

  & > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.4rem;

    color: #fff;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
