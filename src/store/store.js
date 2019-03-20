// configureStore.js

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["dictionaries", "transforms"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store;
  store = createStore(persistedReducer, applyMiddleware(logger, thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};
