import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/GlobalStyles';
import Routes from './routes/Routes';
import { THEMES, COLORS } from './constants';

function App() {
  return (
    <ThemeProvider theme={{ mode: THEMES.dark, colors: COLORS }}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
