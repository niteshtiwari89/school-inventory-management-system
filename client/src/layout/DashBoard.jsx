// import { Component } from "react";
// import { Nav, NavItem, NavLink } from "reactstrap";
import "../css/navbar.css";
import { Link } from "react-router-dom";
// import school from "./School";
import LogoutIcon from "@mui/icons-material/Logout";
// import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { AuthContext } from "../AuthContext";
import {useAuth} from '../contexts/AuthContext';
// export default function DashBoard({onButtonClick})
export default function DashBoard() {
  // const [user, setUser] = useState({ userName: "" });
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogout = () => {
  //   setUser({ userName: "" });
  //   setIsLoggedIn(false);
  // };
  const {logout} = useAuth();
  // const {onButtonClick} = props
  return (
    <>
      {/* <AuthContext.Provider
          value={{ user, setUser, isLoggedIn, setIsLoggedIn }}
        > */}
      {/* <div className="navigation">
                    <h2>DashBoard</h2>
                    <Nav vertical >
                        <NavItem>
                            <NavLink href="">
                                <Link to="/">
                                    <div className="href">Total Inventory</div>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <Link to="/school">
                                    <div className="href">School Items</div>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <Link to="/sports">
                                    <div className="href">Sports Items</div>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <Link to="/labs">
                                    <div className="href">Lab Store</div>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <Link to="/canteen">
                                    <div className="href">Canteen Store</div>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <Link to="/admin">
                                    <div className="href">Admin Store</div>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <Link to="/Somemore">
                                    <div className="href">Page</div>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <Link to="/somemore2">
                                    <div className="href">Page</div>
                                </Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div> */}

      <div className="myclass">
        <div className="myclassheading">DashBoard</div>
        
        <ul className="list-none class-list">
          <li>
            <Link to="/">
              <button>Total Inventory</button>
            </Link>
          </li>
          <li>
            <Link to="/school">
              <button>School Inventory</button>
            </Link>
          </li>
          <li>
            <Link to="/sports">
              <button>Sports Inventory</button>
            </Link>
          </li>
          <li>
            <Link to="/labs">
              <button>Labs Inventory</button>
            </Link>
          </li>
          <li>
            <Link to="/canteen">
              <button>Canteen Inventory</button>
            </Link>
          </li>
          {/* <li>
              <Link to="/admin">
                <button>Admin</button>
              </Link>
            </li> */}
          <li>
            <Link to="/Somemore">
              <button>Stock Adjustment</button>
            </Link>
          </li>
          {/* <li>
              <Link to="/somemore2">
                <button>Extra 2</button>
              </Link>
            </li> */}
        </ul>
      <div className="logout">
        <div className="icond">
          <AccountCircleIcon fontSize="large" />
        </div>
        <button
          // onClick={() => {
          //   console.log("hello");
          // }}
          // onClick={onButtonClick}
          onClick={logout}
        >
          <LogoutIcon />
          Logout
        </button>
      </div>
      </div>
      {/* </AuthContext.Provider> */}
    </>
  );
}

// export default DashBoard;
