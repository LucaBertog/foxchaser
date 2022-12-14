import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './Auth/reducer';
import chatReducer from './Chat/reducer';
import { authApi } from '../services/api/auth.api';
import { profileApi } from '../services/api/profile.api';
import { postApi } from '../services/api/post.api';
import { userApi } from '../services/api/user.api';
import { adminApi } from '../services/api/admin.api';
import { searchApi } from '../services/api/search.api';

const reducersToPersist = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducersToPersist);

const reducer = {
  reducer: persistedReducer,
  chat: chatReducer,
  [authApi.reducerPath]: authApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(authApi.middleware)
      .concat(profileApi.middleware)
      .concat(postApi.middleware)
      .concat(userApi.middleware)
      .concat(adminApi.middleware)
      .concat(searchApi.middleware),
});
const persistor = persistStore(store);

export { store, persistor };
