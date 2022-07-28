import styled from 'styled-components';

export const Container = styled.div``;

export const Img = styled.label<{ url: string }>`
  > div {
    width: 100%;
    height: 20rem;

    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
  }
`;
