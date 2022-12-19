import React from "react";

import "@components/App/App.css";
import { AppRouter } from "@routes/AppRouter";
import { store } from "@store/index";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const persistor = persistStore(store);

export function App() {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <AppRouter />
          </PersistGate>
        </Provider>
      </HashRouter>
    </div>
  );
}
