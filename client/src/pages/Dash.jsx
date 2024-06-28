import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../layout/DashBoard";
import Header from "../layout/Header";
import "../App.css";
import "../css/Page2.css";
import "../css/navbar.css";
import Page2 from "./Page2";
import School from "./School";
import Sports from "./Sports";
import Labs from "./Labs";
import Canteen from "./Canteen";
import More from "./More";
import Logs from "./Logs";


const Dashboard = () => {
  return (
    <>
      <div className="appcontainer">
        <div className="containerDash">
          <DashBoard/>
        </div>
        <div className="containerContent">
          <div className="containerHead">
            <Header></Header>
          </div>
          <div className="containerContentHead">
            <Routes>
              <Route path="/" element={<Page2 />}></Route>
              <Route path="/school" element={<School />}></Route>
              <Route path="/sports" element={<Sports />}></Route>
              <Route path="/labs" element={<Labs />}></Route>
              <Route path="/canteen" element={<Canteen />}></Route>
              <Route path="/stock_adjustment/*" element={<More />}>
                <Route path="logs" element={<Logs />} />
              </Route>
            </Routes>
            </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
