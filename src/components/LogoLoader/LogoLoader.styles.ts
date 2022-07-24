import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  place-content: center;
  overflow: hidden;

  .item {
    width: 100%;
    overflow: visible;
    stroke: #fff;
    stroke-width: 0.5;
    stroke-linejoin: round;
    stroke-linecap: round;
    fill: rgba(255, 122, 0, 1);
  }
`;
