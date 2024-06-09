// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./layout/DashBoard";
import Header from "./layout/Header";
// import LoginPage from "./LoginPage";
import Page2 from "./pages/Page2";
import School from "./pages/SchoolTabpage";
import Sports from "./pages/Sports";
import Labs from "./pages/Labs";
import Canteen from "./pages/Canteen";
import More from "./pages/More";
import Admin from "./pages/Admin";

export default function Dashb() {
  return (
    <>
      <BrowserRouter>
        <div className="appcontainer">
          <div className="containerDash">
            {/* <h2>Dash</h2>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul> */}

            <DashBoard></DashBoard>
          </div>
          <div className="containerContent">
            <div className="containerHead">
              <Header></Header>
            </div>
            <div className="containerContentHead">
              <Routes>
                {/* <Route exact path="/" element={<LoginPage />}></Route> */}
                <Route path="/index" element={<Page2 />}></Route>
                <Route path="/school" element={<School />}></Route>
                <Route path="/sports" element={<Sports />}></Route>
                <Route path="/labs" element={<Labs />}></Route>
                <Route path="/canteen" element={<Canteen />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/Somemore" element={<More />}></Route>
                {/* <Route path="/somemore2" element={<ControlledPopup />}></Route> */}
                {/* <Route path="/form" element={<Form />}></Route> */}
                <Route path="/lab-list" element=""></Route>
                <Route path="/canteen-list" element=""></Route>
                <Route path="/sports-list" element=""></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
