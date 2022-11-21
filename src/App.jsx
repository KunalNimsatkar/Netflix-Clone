import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import SignIn from "./components/SignInPage/SignIn";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/netflix" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
