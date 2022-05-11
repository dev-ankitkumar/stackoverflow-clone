import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
export default function SideBar() {
  return (
    <>
      <div className="flex-shrink-0 p-3 bg-white h-sideBar m-top-4">
        <div className="d-flex flex-column">
          <NavLink to="/">Home</NavLink>
          <span>Public</span>
          <NavLink to="/">Questions</NavLink>
          <NavLink to="tag">Tags</NavLink>
          <NavLink to="/">Users</NavLink>
          <NavLink to="/">About Us</NavLink>
        </div>
      </div>
    </>
  );
}
