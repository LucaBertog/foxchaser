import { File, RockOn } from 'akar-icons';
import styled from 'styled-components';
import * as fonts from '../../assets/styles/Fonts';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${(props) => props.theme.mode.colors.body};

  display: flex;

  overflow-x: hidden;
`;

export const Sidebar = styled.aside`
  position: fixed;

  padding: 4rem 0;

  width: 15%;
  max-width: 25rem;
  height: 100%;
  background: ${(props) => props.theme.mode.colors.container};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const RecordsNav = styled.div`
  width: 90%;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.mode.colors.iconDark};

  display: flex;
  align-items: center;

  padding: 0.8rem 2.4rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.img`
  width: 90%;

  margin-bottom: 4.8rem;
`;
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RecordNavIcon = styled(File)`
  min-width: 2.4rem;
  min-height: 2.4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

export const RecordNavMessage = styled.p`
  ${fonts.Paragraph}
  color: ${(props) => props.theme.mode.colors.text};
  margin-left: 1.6rem;
`;

export const UserWrapper = styled.div``;
export const Avatar = styled.img``;
export const Name = styled.p``;
export const LogoutWrapper = styled.div``;
export const Logout = styled(RockOn)``;
export const LogoutMessage = styled.div``;

export const Main = styled.div`
  width: 85%;
  padding: 6.4rem 11.2rem;
  margin-left: min(15%, 25rem);

  > div {
    width: 100%;
    overflow-x: auto;
    margin-bottom: 4.8rem;
    white-space: nowrap;
  }
`;

export const Title = styled.h1`
  ${fonts.Title1}
  color: ${(props) => props.theme.mode.colors.text};
  margin-bottom: 5.6rem;
`;

export const Subtitle = styled.h3`
  ${fonts.Title3}
  color: ${(props) => props.theme.mode.colors.text};
  margin-bottom: 2.4rem;
`;

export const Table = styled.table`
  width: 100%;
  border: 2px solid ${(props) => props.theme.mode.colors.borderImg};
  border-collapse: collapse;
  text-align: center;

  th {
    padding: 0.8rem;

    border: 2px solid ${(props) => props.theme.mode.colors.borderImg};
    ${fonts.ParagraphN}
    color: ${(props) => props.theme.mode.colors.text};
  }

  td {
    padding: 0.8rem;

    border: 2px solid ${(props) => props.theme.mode.colors.borderImg};
    ${fonts.Small}
    color: ${(props) => props.theme.mode.colors.text};
  }
`;
