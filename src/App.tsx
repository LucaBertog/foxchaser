import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './assets/styles/GlobalStyles';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
