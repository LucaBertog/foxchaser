import styled from 'styled-components';

export const Container = styled.div`
  > form {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 1.6rem;
    color: red;
  }
`;

export const Img = styled.label<{ url: string }>`
  > div {
    width: 100%;
    height: 20rem;

    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
  }
`;
