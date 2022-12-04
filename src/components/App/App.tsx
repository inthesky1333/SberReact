import React from "react";

import "@components/App/App.css";
import { AppRouter } from "@routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
