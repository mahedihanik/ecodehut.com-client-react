import React from 'react';
import {BrowserRouter, HashRouter} from "react-router-dom"
import AppRoute from "./router/AppRoute";


function App() {
  return (
    <div>
        <HashRouter>
            <AppRoute/>
        </HashRouter>
    </div>
  );
}

export default App;
