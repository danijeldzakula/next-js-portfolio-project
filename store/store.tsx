import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "@/helpers/reduxStorage";
import counterSlice from "./features/counterSlice";
import websocketSlice from "./features/websocketSlice";

// Define your reducer names for persistence
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

// Combine your reducers
const rootReducer = combineReducers({
  counter: counterSlice,
  websocket: websocketSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore the persist action
      },
    }).concat(thunk);
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

const persistor = persistStore(store);

// Create a persistor for use in your application
export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
