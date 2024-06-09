import React, { Component } from "react";
import "../App.css";
import inventory from "../image/inventory.png";

export class Header extends Component {
  render() {
    return (
      <>
        <div className="heading">
          <img src={inventory} alt="" />
          <h2>School Inventory Management System(SIMS)</h2>
        </div>
      </>
    );
  }
}

export default Header;
