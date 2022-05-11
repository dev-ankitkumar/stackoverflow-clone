import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../home/Header";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import About from "../Pages/About";
import UseCases from "../Pages/UseCases";
import HomePage from "../Pages/HomePage";
import Tags from "../Pages/SideBar/Tags";
import SideBar from "../home/SideBar";
import Home from "../home/Home";
import UsersList from "../Pages/SideBar/UsersList";
import AboutUs from "../Pages/AboutUs";
import AskQuestion from "../Pages/AskQuestion/AskQuestion";
export default function RoutePage() {
  return (
    <BrowserRouter>
      <Home />
      <div style={{ marginLeft: "220px", paddingTop: "70px" }}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="usecases" element={<UseCases />} />
          <Route path="user" element={<UsersList />} />
          <Route path="tag" element={<Tags />} />
          <Route path="askquestion" element={<AskQuestion />} />
          <Route path="About" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
