import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from "react-router-dom";

//context
// import AuthContext, { AuthProvider } from "../services/context";

import PurchaseGreaterThanTen from "../pages/PurchaseGreaterThanTen";
import PurchaseLessThanTen from "../pages/PurchaseLessThanTen";
import Home from '../pages/Home'
export default function Rotas() {
 
  return (
     
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/menores" element={<PurchaseLessThanTen/>} />
          <Route path="/maiores" element={<PurchaseGreaterThanTen />} />
          
        </Routes>
  );
}

// email: lucasteste@gmail.com
// senha: 123456
