// import React from "react";
// import { useState } from "react";
import "../css/Page2.css";
// import { Link, Route, Routes } from "react-router-dom";
// import School from "../layout/School";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import SchoolStickyHeadTable from "../TabPages/SchoolTabpage";
// import TabPanel from "@mui/lab/TabPanel";
// import { useTheme } from "@mui/material/styles";
// import {Box} from "@mui/material";
// import { Tabs } from "@mui/material";
import TextField from "@mui/material/TextField";
// import SportsStickyHeadTable from "../TabPages/SportsTabpage";
// import CanteenStickyHeadTable from "../TabPages/CanteenTabpage";
// import LabsStickyHeadTable from "../TabPages/LabTabPage";


import { Link } from "react-router-dom";
// import { SwipeableDrawer } from "@mui/material";

function Page2() {
  // const theme = useTheme();
  // const [value, setValue] = useState("1");

  // const tabArray = [
  //   {
  //     value: "1",
  //     label: "school items",
  //     component: <SchoolStickyHeadTable title="School Items" />,
  //   },
  //   {
  //     value: "2",
  //     label: "sports items",
  //     component: <SportsStickyHeadTable title="Sports Items" />,
  //   },
  //   {
  //     value: "3",
  //     label: "canteen items",
  //     component: <CanteenStickyHeadTable title="Canteen Items" />,
  //   },
  //   {
  //     value: "4",
  //     label: "labs items",
  //     component: <LabsStickyHeadTable title="Labs Items" />,
  //   },
  // ];
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };
  // useEffect(() => {
  //   const storedTabIndex = localStorage.getItem('activeTabIndex');
  //   if (storedTabIndex !== null) {
  //     setValue(parseInt(storedTabIndex)); // Set the active tab index from localStorage
  //   }
  // }, []);

  return (
    <>
      <div className="page2container">
        <div className="searchbox">
          {/* <input type="text" name="" placeholder="Search" id="" /> */}
          {/* <Box
            // component="form"
            // sx={{
            //   "& .MuiTextField-root": { m: 1, width: "25ch" },
            // }}
            noValidate
            autoComplete="off"
          > */}
            <TextField
              id="standard"
              label="Search"
              // onChange={{}}
              //  defaultValue="Hello World"
            />
          {/* </Box> */}
          {/* <div className="w-62">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Username
              </label>
            </div>
          </div> */}

          {/* <TextField  id="standard-basic" label="Standard" variant="outlined" /> */}
        </div>
        {/* <hr /> */}
        <div className="recent-items">
          <div className="items">
            <div className="item-head">School Inventory</div>
            <div className="item-body">
              <div className="item-body-list">
                <div className="list-head">Total Inventory</div>
                <div className="list-body">40 </div>
              </div>
              {/* {count} */}
              <div className="item-body-list">
                <div className="list-head">Available</div>
                <div className="list-body">25</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Used</div>
                <div className="list-body">15</div>
              </div>
            </div>
            <div className="item-link">
              <Link to="/sports">
              <button>Go To School</button>
              </Link>
            </div>
          </div>
          <div className="items">
            <div className="item-head">Sports Inventory</div>
            <div className="item-body">
              <div className="item-body-list">
                <div className="list-head">Total Inventory</div>
                <div className="list-body">50</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Available</div>
                <div className="list-body">30</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Used</div>
                <div className="list-body">20</div>
              </div>
            </div>
            <div className="item-link">
              <Link to="/school">
              <button>Go To Sports</button>
              </Link>
            </div>
          </div>
          <div className="items">
            <div className="item-head">Labs Inventory</div>
            <div className="item-body">
              <div className="item-body-list">
                <div className="list-head">Total Inventory</div>
                <div className="list-body">70</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Available</div>
                <div className="list-body">40</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Used</div>
                <div className="list-body">30</div>
              </div>
            </div>
            <div className="item-link">
              <Link to="/canteen">
              <button>Go To Canteen</button>
              </Link>
            </div>
          </div>
          <div className="items">
            <div className="item-head">Canteen Inventory</div>
            <div className="item-body">
              <div className="item-body-list">
                <div className="list-head">Total Inventory</div>
                <div className="list-body">40</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Available</div>
                <div className="list-body">30</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Used</div>
                <div className="list-body">10</div>
              </div>
            </div>
            <div className="item-link">
              <Link to="/labs">
              <button>Go To Labs</button>
              </Link>
            </div>
          </div>
          {/* <div className="items">
            <h3>item</h3>
            <p>Date & Time</p>
          </div> */}
        </div>
        {/* <hr /> */}
        {/* <div className="vertical-nav">
          <ul className="list">
            <li>
              <Link to="/school-list">
                <button>School</button>
              </Link>
            </li>
            <li>
              <Link to="/lab-list">
                <button>Labs</button>
              </Link>
            </li>
            <li>
              <Link to="/canteen-list">
                <button>Canteen</button>
              </Link>
            </li>
            <li>
              <Link to="/sports-list">
                <button>Sports</button>
              </Link>
            </li>
          </ul>
           <button>School</button>
                        <button>Sp</button>
                        <button>Can</button>
                        <button>lab</button>
        </div> */}
        {/* <div className="data-display">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="School" value="1" />
                <Tab label="Sports" value="2" />
                <Tab label="Canteen" value="3" />
              </TabList>
            </Box>
            {/* <SwipeableDrawer
              index={value}
              onChangeIndex={handleChangeIndex}
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            > * / }
              <TabPanel value="1">
                <StickyHeadTable title="School Items" />
              </TabPanel>
              <TabPanel value="2">
                <StickyHeadTable title="Sports Items" />
              </TabPanel>
              <TabPanel value="3">
                <StickyHeadTable title="Canteen Items" />
              </TabPanel>
            {/* </SwipeableDrawer> * / }
          </TabContext>
        </div> */}
        {/* <div className="data-display">
          <Box sx={{ height: "auto" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              {tabArray.map((item) => {
                return (
                  <Tab key={item.value} label={item.label} value={item.value} />
                );
              })}
            </Tabs>

            {tabArray.map((item) => {
              const isMatch = item.value === value;
              return (
                isMatch && (
                  <Box key={item.value} sx={{ padding: "10px" }}>
                    {item.component}
                  </Box>
                )
              );
            })}
          </Box>
        </div> */}
      </div>
    </>
  );
}

export default Page2;
