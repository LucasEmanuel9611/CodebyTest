import React, { useContext } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    
  } from "react-router-dom";
import Rotas from "./routes/main.routes";

export default function App() {

  return (
      <Router>
          <Rotas />
      </Router>

  );
}
