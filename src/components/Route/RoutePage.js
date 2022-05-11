import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../home/Header";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import Customers from "../Pages/Customers";
import UseCases from "../Pages/UseCases";
import HomePage from "../Pages/HomePage";
import Tags from "../Pages/SideBar/Tags";
import SideBar from "../home/SideBar";
import Home from "../home/Home";
export default function RoutePage() {
  return (
    <BrowserRouter>
      <Header />
      <div className="row">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-9">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="product" element={<Product />} />
            <Route path="customer" element={<Customers />} />
            <Route path="usecases" element={<UseCases />} />
            <Route path="tag" element={<Tags />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
