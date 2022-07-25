import styled from 'styled-components';
import * as fonts from '../../../assets/styles/Fonts';

export const Container = styled.div`
  position: relative;
  bottom: -4rem;

  width: 20%;
  background: ${(props) => props.theme.mode.colors.container};
  border-radius: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 1.6rem;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;
export const ProfilePic = styled.img`
  position: relative;
  top: -4rem;

  width: 11.2rem;
  height: 11.2rem;

  border: 3px solid ${(props) => props.theme.mode.colors.borderImg};
  border-radius: 100%;
`;

export const Username = styled.p`
  position: relative;
  top: -3rem;
  ${fonts.ParagraphN}
  color: ${(props) => props.theme.mode.colors.text};
`;

export const Emblems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditProfile = styled.button`
  ${fonts.Captar}
  color: ${(props) => props.theme.mode.colors.text};

  padding: 0.2rem 1.6rem;

  height: 2rem;
  background: ${(props) => props.theme.mode.colors.iconDark};
  border-radius: 1.6rem;

  cursor: pointer;

  margin: 1.6rem 0 1.6rem 0;
`;
