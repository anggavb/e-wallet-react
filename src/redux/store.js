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

import userRegisteredReducer from "./slices/userRegistered";
import userLoginReducer from "./slices/userLogin";
import { getEnv } from '@utils';

const persistConfig = {
  key: "users",
  storage,
};

const store = configureStore({
  reducer: persistCombineReducers(persistConfig, {
    users: userRegisteredReducer,
    userLogin: userLoginReducer,
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