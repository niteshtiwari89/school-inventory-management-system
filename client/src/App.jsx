// import { Header } from "./layout/Header";
// // import Page from "./pages/Page";
// import Page2 from "./pages/Page2";
// // import { Component } from "react";
// import DashBoard from "./layout/DashBoard";
// import "./App.css";
// import "./css/Page2.css";
// import Sports from "./pages/Sports";
// import Labs from "./pages/Labs";
// import Canteen from "./pages/Canteen";
// // import Admin from "./pages/Admin";
// import School from "./pages/School";
// // import { Row, Col, Container } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import More from "./pages/More";
// // import { AuthContext } from "./AuthContext";
// // import { color } from "chart.js/helpers";
// // import { withTheme } from "styled-components";
// import Form from "./pages/Form";
// // import { useState } from "react";
// // import FullWidthTabs from "./pages/Hello";
// // import ControlledPopup from "./pages/Sondewmas";
// // import LoginPage from "./LoginPage";
// // import NewComponent from "./pages/NewComponent";
// // import MyComponent from "./pages/Testing";
// // import { Height } from "@mui/icons-material";
// // import StickyHeadTable from "./pages/Tabpage";
// // import VerticalTabs from "./layout/VerticalTabs";
// // import Sondewmas from "./pages/Sondewmas";
// // import { Navigate } from "react-router-dom";

// function App() {
//   // const [user, setUser] = useState({ userName: "" });
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // const handleLogout = () => {
//   //   setUser({ userName: "" });
//   //   setIsLoggedIn(false);zzzzzzzz
//   // };
//   return (
//     // <AuthContext.Provizder value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
//       <BrowserRouter>
//         <>
//           {/* <Container className="contain m-0 p-0" fluid>
//         <Row className="list-main" xs="12">
//           <Col xs="2 p-0"> 
//             <DashBoard></DashBoard>
//           </Col>
//           <Col xs="10 p-0 color">
//             <Row xs="12">
//               <Header></Header>
//             </Row>
//             { / * <hr style={{margin:0,color:"", opacity:".3 "}} />  * / }
//             <Row className=""> 
//               <Routes>
//                 <Route path="/" element={<Page2 />}></Route>
//                 <Route path="/school" element={<School />}></Route>
//                 <Route path="/sports" element={<Sports />}></Route>
//                 <Route path="/labs" element={<Labs />}></Route>
//                 <Route path="/canteen" element={<Canteen />}></Route>
//                 <Route path="/admin" element={<Admin />}></Route>
//                 <Route path="/Somemore" element={<More />}></Route>
//                 <Route path="/somemore2" element={<ControlledPopup />}></Route>
//                 <Route path="/form" element={<Form />}></Route>
//                 <Route path="/lab-list" element=""></Route>
//                 <Route path="/canteen-list" element=""></Route>
//                 <Route path="/sports-list" element=""></Route>
//               </Routes>
//             </Row>
//           </Col>
//         </Row>
//       </Container> */}
//           {/* {!isLoggedIn && <LoginPage />} */}

//           {/* {isLoggedIn && ( */}
//             <div className="appcontainer">
//               <div className="containerDash">
//                 {/* <h2>Dash</h2>
//           <ul>
//             <li>Hello</li>
//             <li>Hello</li>
//             <li>Hello</li>
//             <li>Hello</li>
//           </ul> */}

//                 <DashBoard 
//                 // onButtonClick={handleLogout}
//                 />
//               </div>
//               <div className="containerContent">
//                 <div className="containerHead">
//                   <Header></Header>
//                 </div>
//                 <div className="containerContentHead">
//                   <Routes>
//                     {/* <Route exact path="/" element={<LoginPage/>}></Route> */}
//                     <Route path="/" element={<Page2 />}></Route>
//                     <Route path="/school" element={<School />}></Route>
//                     <Route path="/sports" element={<Sports />}></Route>
//                     <Route path="/labs" element={<Labs />}></Route>
//                     <Route path="/canteen" element={<Canteen />}></Route>

//                     {/* <Route path="/admin" element={<Admin />}></Route> */}
//                     <Route path="/Somemore" element={<More />}></Route>
//                     {/* <Route path="/somemore2" element={<ControlledPopup />}></Route> */}
//                     <Route path="/form" element={<Form />}></Route>
//                     <Route path="/lab-list" element=""></Route>
//                     <Route path="/canteen-list" element=""></Route>
//                     <Route path="/sports-list" element=""></Route>
//                   </Routes>
//                 </div>
//               </div>
//             </div>
//           {/* )}  */}
//         </>
//       </BrowserRouter>
//     // </AuthContext.Provider>
//   );
// }

// export default App;


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./pages/Dash";
import {useAuth} from "./contexts/AuthContext";
import School from "./pages/School";
import Page2 from "./pages/Page2";
import Sports from "./pages/Sports";
import Labs from "./pages/Labs";
import Canteen from './pages/Canteen';
// import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
      <Router>
        <Routes>
          <Route
            path="/signup"
            element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/*"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          >
            <Route path="page" element={<Page2 />} />
            <Route path="" element={<School />} />
            <Route path="sports" element={<Sports />} />
            <Route path="labs" element={<Labs />} />
            <Route path="canteen" element={<Canteen />} />
          </Route>
        </Routes>
      </Router>
  );
};
export default App;
