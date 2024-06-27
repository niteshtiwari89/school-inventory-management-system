import "../css/navbar.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InventoryIcon from '@mui/icons-material/Inventory';
import { useAuth } from "../contexts/AuthContext";
import SportsIcon from '@mui/icons-material/Sports';
export default function DashBoard() {
  // const [user, setUser] = useState({ userName: "" });
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogout = () => {
  //   setUser({ userName: "" });
  //   setIsLoggedIn(false);
  // };
  const { logout } = useAuth();
  // const {onButtonClick} = props
  return (
    <>
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
            <Link to="/stock_adjustment">
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
