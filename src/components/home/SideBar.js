import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import world1 from "../Assets/Images/world1.svg";
export default function SideBar() {
  return (
    <>
      <div className="flex-shrink-0 p-3 bg-white h-sideBar m-top-4 ">
        <div className="d-flex flex-column">
          <NavLink to="/" className="p-bottom-20 p-top-20 text-color ">
            Home
          </NavLink>
          <span className="p-bottom-10 text-color">Public</span>
          <div className="d-flex">
            <img src={world1} alt="" className="img-globe" />
            <NavLink
              to="/"
              className="m-bottom-10 s-bar-home text-color"
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
                background: isActive ? "rgb(72 133 225)" : "",
                padding: isActive ? "5px 15px 5px 15px" : "",
                borderRadius: isActive ? "10px" : "",
              })}
            >
              Questions
            </NavLink>
          </div>
          <div className="d-flex flex-column p-left-30">
            <NavLink
              to="tag"
              className="p-bottom-10 text-color"
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
                background: isActive ? "rgb(72 133 225)" : "",
                padding: isActive ? "5px 15px 5px 15px" : "",
                borderRadius: isActive ? "10px" : "",
              })}
            >
              Tags
            </NavLink>
            <NavLink
              to="user"
              className="p-bottom-10 text-color"
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
                background: isActive ? "rgb(72 133 225)" : "",
                padding: isActive ? "5px 15px 5px 15px" : "",
                borderRadius: isActive ? "10px" : "",
              })}
            >
              Users
            </NavLink>
            {/* <NavLink
              to="/About"
              className="p-bottom-10 text-color"
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
                background: isActive ? "rgb(72 133 225)" : "",
                padding: isActive ? "5px 15px 5px 15px" : "",
                borderRadius: isActive ? "10px" : "",
              })}
            >
              About Us
            </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
}
