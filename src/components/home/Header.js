// import { useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from "react-router-dom";
// import logo from "../Images/logo.svg";
// import "./Dashboard.css";
// import data from "../jsonFiles/data.json";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

// const pages = ["Product", "Customer", "Use Cases"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const Header = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);
//   const [auth, setAuth] = useState(false);
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <NavLink
//             to="/"
//             style={({ isActive }) => {
//               return {
//                 display: "block",
//                 margin: "1rem 3px",
//                 color: isActive ? "rgb(194 80 67)" : "",
//               };
//             }}
//           >
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".1rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               {data.AppName}
//             </Typography>
//           </NavLink>
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <NavLink
//                 style={({ isActive }) => {
//                   return {
//                     display: "block",
//                     margin: "1rem 3px",
//                     color: isActive ? "rgb(194 80 67)" : "",
//                   };
//                 }}
//                 to={`${page}`}
//                 key={page}
//               >
//                 <Button
//                   key={page}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   {page}
//                 </Button>
//               </NavLink>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             {auth ? (
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             ) : null}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Header;

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
      <div>
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
        <SideBar />
      </div>
    </>
  );
}
