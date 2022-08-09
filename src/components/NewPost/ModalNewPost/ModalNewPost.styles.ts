import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(6, 9, 17, 0.9);
  z-index: 999;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalStyle = styled.div`
  position: relative;
  width: 50%;
  background: none;
  border-radius: 1.6rem;
  padding: 3.2rem 5.6rem;
`;
