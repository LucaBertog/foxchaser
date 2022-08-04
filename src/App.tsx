/* eslint-disable no-underscore-dangle */
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { useEffect, useMemo, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { Cross } from 'akar-icons';
import GlobalStyles from './assets/styles/GlobalStyles';
import Routes from './routes/Routes';
import { THEMES, COLORS } from './constants';

import { UserContext } from './contexts/User.context';
import { selectToken } from './store/Auth/reducer';
import { DecodedUser } from './interfaces/decodedUser.interface';
import { useGetUserByIdQuery } from './services/api/user.api';
import { decodeJWT } from './services/decode/decodeJwt';

function App() {
  const token = useSelector(selectToken);
  const [currentUser, setCurrentUser] = useState<DecodedUser>();
  const { data: user } = useGetUserByIdQuery(
    currentUser?._id ? currentUser?._id : skipToken
  );

  useEffect(() => {
    if (token) {
      const _user = decodeJWT<DecodedUser>(token);
      setCurrentUser(_user);
    }
  }, [token]);

  const userContext = useMemo(
    () => ({
      id: user?.user.id || '',
      name: user?.user.name || '',
      username: user?.user.username || '',
      description: user?.user.description || '',
      profilePicture: user?.user.profilePicture || '',
      coverPicture: user?.user.coverPicture || '',
      followers: user?.user.followers || [],
      followings: user?.user.followings || [],
      emblems: user?.user.emblems || [],
    }),
    [user]
  );

  const CloseButton = ({ closeToast }: any) => <Cross onClick={closeToast} />;

  return (
    <ThemeProvider theme={{ mode: THEMES.dark, colors: COLORS }}>
      <BrowserRouter>
        <UserContext.Provider value={userContext}>
          <Routes />
        </UserContext.Provider>
        <GlobalStyles />
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={CloseButton}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
