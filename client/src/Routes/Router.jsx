// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sports from "../pages/Sports";
import Labs from "../pages/Labs";
import Canteen from "../pages/Canteen";
import Admin from "../pages/Admin";
import School from "../pages/School";
import LoginPage from "../LoginPage";
import Page2 from '../pages/Page2';

export default function Router() {
  return (
    <>
      <BrowserRouter>
      <Routes>
                <Route exact path="/" element={<LoginPage/>}></Route>
                <Route path="/index" element={<Page2 />}></Route>
                <Route path="/school" element={<School />}></Route>
                <Route path="/sports" element={<Sports />}></Route>
                <Route path="/labs" element={<Labs />}></Route>
                <Route path="/canteen" element={<Canteen />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                {/* <Route path="/Somemore" element={<More />}></Route>
                <Route path="/somemore2" element={<ControlledPopup />}></Route>
                <Route path="/form" element={<Form />}></Route> */}
                <Route path="/lab-list" element=""></Route>
                <Route path="/canteen-list" element=""></Route>
                <Route path="/sports-list" element=""></Route>
              </Routes>
      </BrowserRouter>
    </>
  )
}
