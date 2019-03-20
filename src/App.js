import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import configureStore from "./store/store";
import MainContainer from "./Containers/MainContainer";
import { theme } from "./theme";

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MainContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
