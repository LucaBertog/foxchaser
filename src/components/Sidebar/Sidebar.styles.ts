import styled from 'styled-components';
import StickyBox from 'react-sticky-box';

export const Container = styled(StickyBox)`
  display: none;
  width: 30%;
  margin-top: 2.4rem;

  @media (min-width: 1280px) {
    display: block;
  }
`;
