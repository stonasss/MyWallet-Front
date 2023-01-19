import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

export default function MainPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/unova-entrada" element={<Deposit />} />
        <Route path="/nova-saida" element={<Withdraw />} />
      </Routes>
    </BrowserRouter>
  );
}
