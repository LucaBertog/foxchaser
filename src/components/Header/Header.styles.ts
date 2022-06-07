import styled from 'styled-components';
import { Plus as PlusIcon } from 'akar-icons';

export const Container = styled.header`
  order: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.8rem 2.4rem;

  width: 100%;
  background: ${(props) => props.theme.mode.colors.container};
`;

export const NewPost = styled.section`
  background: ${(props) => props.theme.mode.colors.button1};
  width: 6rem;
  height: 6rem;
  position: absolute;
  bottom: 5.6rem;
  right: 0;
  border-radius: 100% 0 0 0;

  padding: 2rem 0 0 2rem;
`;

export const Plus = styled(PlusIcon)`
  width: 3.2rem;
  height: 3.2rem;

  color: ${(props) => props.theme.mode.colors.iconLight};
`;
