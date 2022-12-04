import React from "react";

import "@components/App/App.css";
import { AppRouter } from "@routes/AppRouter";
import { HashRouter } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </div>
  );
}
