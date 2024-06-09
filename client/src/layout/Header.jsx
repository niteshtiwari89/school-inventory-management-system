import React, { Component } from "react";
import "../App.css";
import inventory from "../image/inventory.png";

export class Header extends Component {
  render() {
    return (
      <>
        <div className="heading">
          <img src={inventory} alt="" />
          <div className="headingtitle">School Inventory Management System(SIMS)</div>
        </div>
      </>
    );
  }
}

export default Header;
