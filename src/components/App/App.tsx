import React from "react";

import "@components/App/App.css";
import { AppRouter } from "@routes/AppRouter";
import { store } from "@store/index";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </HashRouter>
    </div>
  );
}
