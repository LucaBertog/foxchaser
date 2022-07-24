import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './Auth/reducer';
import { authApi } from '../services/api/auth.api';

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
  [authApi.reducerPath]: authApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);

export { store, persistor };
