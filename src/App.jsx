import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import SignIn from "./components/SignUp/SignUp";
import Login from "./components/Login/LoginIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/netflix" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
