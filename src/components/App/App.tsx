import React from "react";

import "@components/App/App.css";
import { AppRouter } from "@routes/AppRouter";
import { HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </div>
  );
}

export default App;
