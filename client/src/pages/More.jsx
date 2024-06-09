// import React from "react";
// import Page from "./Page";
// import { useState } from "react";
import "../css/form.css";
import { Select, TextField } from "@mui/material";
// import axios from "axios";
// import {Option} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from '@mui/material/Select';
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Form, FormGroup, Label, Input } from "reactstrap";
// import { Row, Col } from "reactstrap";

function More() {
  return (
    <>
      <form className="form">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "100%" }}
              // size="small"
            >
              <InputLabel id="demo-select-small-label">Inventory</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Inventory"
                sx={{ width: "100%" }}
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={40}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {/* <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"+3
              0
            >
              First Name
            </label> */}
            {/* <select
              className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select> */}
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "100%" }}
              // size="small"
            >
              <InputLabel id="demo-select-small-label">Store Inventory</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Store Inventory"
                sx={{ width: "100%" }}
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-full md:w-1/2 px-3">
            {/* <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label> */}
            {/* <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Available"
            /> */}
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "100%" }}
              // size="small"
            >
              <TextField id="standard" label="Available Quantity" />
            </FormControl>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {/* <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label> */}
            {/*             
            <input
              className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Available"
            /> */}
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "100%" }}
              // size="small"
            >
              <TextField id="standard" label="Previous Quantity" />
            </FormControl>
          </div>
          <div className="w-full md:w-1/2 px-3">
            {/* <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label> */}
            {/* <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Reason of Adjustment"
          /> */}
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "100%" }}
              // size="small"
            >
              <TextField id="standard" label="Reason of Adjustment" />
            </FormControl>
          </div>
        </div>
        {/* <div className="flex items-center justify-between"> */}
        <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
        <button
          className="btn-final bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
        </FormControl>
        {/* </div> */}
      </form>
    </>
  );
}

export default More;
