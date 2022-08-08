import styled from 'styled-components';

export const Container = styled.div`
  > form {
    display: flex;
    flex-direction: column;
  }

  font-size: 1.6rem;
  color: red;

  .codex-editor:first-of-type {
    display: none;
  }

  .codex-editor {
    background-color: green;
  }

  button {
    padding: 2rem;
    background: red;
  }
`;
