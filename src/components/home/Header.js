import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.svg";
import "./Dashboard.css";
import data from "../jsonFiles/data.json";
import SideBar from "./SideBar";
export default function Header() {
  let leftNav = ["Product", "Customer", "Use Cases"];
  const navlinkLeft = leftNav.map((x) => (
    <NavLink
      style={({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 3px",
          color: isActive ? "rgb(194 80 67)" : "",
        };
      }}
      clas
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
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="text-capitalize fs-4 fw-bold align-items-center d-flex">
                {data.AppName}
              </div>
            </NavLink>
            <div className="d-flex p-left-20 ">{navlinkLeft}</div>
          </div>
          <div>
            <input type="text" placeholder="Search" className="searchText" />
            <NavLink to="signup" className="p-right-10 p-left-20">
              <button className="BtnDashboard">Signup</button>
            </NavLink>
            <NavLink to="login" className="p-right-10">
              <button className="BtnDashboard"> Login</button>
            </NavLink>
          </div>
        </div>
        {/* <SideBar /> */}
      </div>
    </>
  );
}
