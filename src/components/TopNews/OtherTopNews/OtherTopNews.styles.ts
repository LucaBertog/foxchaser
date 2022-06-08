import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Img = styled.div<{ url: string }>`
  width: 40%;
  height: 10vh;
  margin-right: 0.8rem;

  background: linear-gradient(360deg, #060911 0%, rgba(6, 9, 17, 0) 67%),
    url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem;
`;
