import styled from 'styled-components';
import StickyBox from 'react-sticky-box';

export const Container = styled(StickyBox)`
  display: none;
  width: 30%;

  @media (min-width: 1100px) {
    display: block;
  }
`;
