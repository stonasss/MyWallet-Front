import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import { UserContext } from "../appContext/Token";

export default function MainPage() {
  const [token, setToken] = useState([])

  return (
    <UserContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-entrada" element={<Deposit />} />
          <Route path="/nova-saida" element={<Withdraw />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
