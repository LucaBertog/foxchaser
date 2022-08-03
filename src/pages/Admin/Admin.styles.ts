import { CircleCheckFill, File, SignOut } from 'akar-icons';
import styled from 'styled-components';
import * as fonts from '../../assets/styles/Fonts';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${(props) => props.theme.mode.colors.body};

  display: flex;

  overflow-x: hidden;

  a {
    width: 100%;
  }
`;

export const Sidebar = styled.aside`
  position: fixed;

  padding: 4rem 1.6rem;

  width: 15%;
  max-width: 25rem;
  height: 100%;
  background: ${(props) => props.theme.mode.colors.container};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RecordsNav = styled.div`
  width: 100%;
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
`;
export const Logo = styled.img`
  width: 100%;

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

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 2.4rem;
`;

export const Avatar = styled.img`
  width: 5.6rem;
  height: 5.6rem;

  border-radius: 100%;
  border: 2px solid #ffeb35;
`;

export const Name = styled.p`
  ${fonts.Title4}
  color: ${(props) => props.theme.mode.colors.text};

  margin: 0 0.8rem 0 1.6rem;
`;

export const Approved = styled(CircleCheckFill)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;

export const LogoutWrapper = styled.div`
  width: 100%;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.mode.colors.iconDark};

  display: flex;
  align-items: center;

  padding: 0.8rem 2.4rem;
  cursor: pointer;
`;

export const Logout = styled(SignOut)`
  min-width: 2.4rem;
  min-height: 2.4rem;
  color: ${(props) => props.theme.mode.colors.iconLight};
`;
export const LogoutMessage = styled.div`
  ${fonts.Paragraph}
  color: ${(props) => props.theme.mode.colors.text};
  margin-left: 1.6rem;
`;

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
