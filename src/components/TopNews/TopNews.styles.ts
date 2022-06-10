import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Separator = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  width: 100%;
  height: 1px;

  margin: 1.6rem 0;

  background: ${(props) => props.theme.mode.colors.container};
`;

export const WrapperOtherNews = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
