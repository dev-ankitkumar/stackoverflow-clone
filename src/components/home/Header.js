import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.svg";
import search from "../Assets/Images/search.svg";
import "./Dashboard.css";
import data from "../jsonFiles/data.json";
import SideBar from "./SideBar";
import { useEffect } from "react";
export default function Header() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("login"));
    if (items) {
      setItems(items);
    }
  }, []);

  let leftNav = ["Product", "About"];
  const navlinkLeft = leftNav.map((x) => (
    <NavLink
      style={({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 3px",
          color: isActive ? "rgb(194 80 67)" : "",
        };
      }}
      to={`${x}`}
      key={x}
      className="p-right-20 BtnDashboard1"
    >
      {x}
    </NavLink>
  ));
  return (
    <>
      <div className="position-fixed z-index-999 w-100">
        <div className="d-flex  h-dashboard justify-content-evenly align-items-center">
          <div className="d-flex align-items-center">
            <NavLink to="/" className="d-flex logocolor">
              <img src={logo} alt="" />
              <div className="text-capitalize fs-4 fw-bold align-items-center d-flex">
                {data.AppName}
              </div>
            </NavLink>

            <div className="d-flex p-left-20 ">{navlinkLeft}</div>
          </div>
          <input type="text" placeholder="Search..." className="searchText" />
          {items ? (
            <div className="d-flex">
              <NavLink
                to="signup"
                className="p-right-10 p-left-20"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgb(194 80 67)" : "",
                  };
                }}
              >
                <button className="BtnDashboard">Signup</button>
              </NavLink>
              <NavLink to="login" className="p-right-10">
                <button className="BtnDashboard"> Login</button>
              </NavLink>
            </div>
          ) : (
            <div>no</div>
          )}
        </div>
        {/* <SideBar /> */}
      </div>
    </>
  );
}
