import "../css/Page2.css";
import axios from "axios";
import {ForwardOutlined} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Page2() {
const [schooldata,setSchooldata] = useState([]);
const [sportsdata,setSportsdata] = useState([]);
const [canteendata,setCanteendata] = useState([]);
const [labsdata,setLabsdata] = useState([]);
const [schoolsum, setSchoolsum] = useState(0);
const [sportssum, setSportsSum] = useState(0);
const [canteensum, setCanteensum] = useState(0);
const [labsum, setLabsum] = useState(0);

useEffect(()=>{
  axios.get("http://localhost:5000/sports_items").then((response)=>{
    setSportsdata(response.data)
    // console.log(response)
  }).
  catch((error)=>{
    console.error("Error Fetching Data:",error);
  })

  axios.get("http://localhost:5000/school_items").then((response)=>{
    setSchooldata(response.data)
  }).
  catch((error)=>{
    console.error("Error Fetching Data:",error);
  })

  axios.get("http://localhost:5000/canteen_items").then((response)=>{
    setCanteendata(response.data)
  }).
  catch((error)=>{
    console.error("Error Fetching Data:",error);
  })

  axios.get("http://localhost:5000/labs_items").then((response)=>{
    setLabsdata(response.data)
  }).
  catch((error)=>{
    console.error("Error Fetching Data:",error);
  })
},[])

useEffect(() => {
  const calculateSum = () => {
    let total = 0;
    sportsdata.forEach(item => {
      total += item.quantity;
    });
    setSportsSum(total);
  };

  calculateSum();
}, [sportsdata]);

useEffect(() => {
  const calculateSum = () => {
    let total = 0;
    schooldata.forEach(item => {
      total += item.quantity;
    });
    setSchoolsum(total);
  };

  calculateSum();
}, [schooldata]);

useEffect(() => {
  const calculateSum = () => {
    let total = 0;
    canteendata.forEach(item => {
      total += item.quantity;
    });
    setCanteensum(total);
  };

  calculateSum();
}, [canteendata]);

useEffect(() => {
  const calculateSum = () => {
    let total = 0;
    labsdata.forEach(item => {
      total += item.quantity;
    });
    setLabsum(total);
  };

  calculateSum();
}, [labsdata]);

  return (
    <>
      <div className="page2container">
        <div className="recent-items">
          <div className="items">
            <div className="item-head">School Inventory</div>
            <div className="item-body">
              <div className="item-body-list">
                <div className="list-head">Total Inventory</div>
                <div className="list-body">{schooldata.length}</div>
              </div>
              {/* {count} */}
              <div className="item-body-list">
                <div className="list-head">Available</div>
                <div className="list-body">{schoolsum}</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Used</div>
                <div className="list-body">15</div>
              </div>
            </div>
            <div className="item-link">
              <Link to="/school">
              <button><ForwardOutlined /></button>
              </Link>
            </div>
          </div>
          <div className="items">
            <div className="item-head">Sports Inventory</div>
            <div className="item-body">
              <div className="item-body-list">
                <div className="list-head">Total Inventory</div>
                <div className="list-body">{sportsdata.length}</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Available</div>
                <div className="list-body">{sportssum}</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Used</div>
                <div className="list-body">20</div>
              </div>
            </div>
            <div className="item-link">
              <Link to="/sports">
              <button><ForwardOutlined /></button>
              </Link>
            </div>
          </div>
          <div className="items">
            <div className="item-head">Labs Inventory</div>
            <div className="item-body">
              <div className="item-body-list">
                <div className="list-head">Total Inventory</div>
                <div className="list-body">{labsdata.length}</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Available</div>
                <div className="list-body">{labsum}</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Used</div>
                <div className="list-body">30</div>
              </div>
            </div>
            <div className="item-link">
              <Link to="/canteen">
              <button><ForwardOutlined /></button>
              </Link>
            </div>
          </div>
          <div className="items">
            <div className="item-head">Canteen Inventory</div>
            <div className="item-body">
              <div className="item-body-list">
                <div className="list-head">Total Inventory</div>
                <div className="list-body">{canteendata.length}</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Available</div>
                <div className="list-body">{canteensum}</div>
              </div>
              <div className="item-body-list">
                <div className="list-head">Used</div>
                <div className="list-body">10</div>
              </div>
            </div>
            <div className="item-link">
              <Link to="/labs">
              <button><ForwardOutlined/></button>
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
