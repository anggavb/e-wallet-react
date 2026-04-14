import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";
import storage from "redux-persist/es/storage";

import usersReducer from "./slices/users";
import { getEnv } from '@utils';

const persistConfig = {
  key: "credentials",
  storage,
};

const store = configureStore({
  reducer: persistCombineReducers(persistConfig, {
    users: usersReducer,
  }),
  devTools: getEnv.env === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;