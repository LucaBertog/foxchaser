import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from './assets/styles/GlobalStyles';
import Routes from './routes/Routes';
import { THEMES, COLORS } from './constants';
import { persistor, store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={{ mode: THEMES.dark, colors: COLORS }}>
          <BrowserRouter>
            <Routes />
            <GlobalStyles />
            <ToastContainer />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
