// // import React from "react";
// // import Page from "./Page";
// import { useState } from "react";
// import "../css/form.css";
// import { Select, TextField } from "@mui/material";
// // import axios from "axios";
// // import {Option} from "@mui/material";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Button from "@mui/material/Button";
// // import Select from '@mui/material/Select';
// // import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";
// // import axios
// // import { Link } from "react-router-dom";
// // import { Form, FormGroup, Label, Input } from "reactstrap";
// // import { Row, Col } from "reactstrap";

// function More() {
//   // const [inventory, setInventory] = useState("");
//   // const [storeInventory, setStoreInventory] = useState("");
//   // const [availableQuantity, setAvailableQuantity] = useState("");
//   // const [previousQuantity, setPreviousQuantity] = useState("");
//   // const [reasonOfAdjustment, setReasonOfAdjustment] = useState("");

//   // const handleInventoryChange = (event) => {
//   //   const selectedValue = event.target.value;
//   //   setInventory(selectedValue);

//   //   // Automatically update other fields based on the selected inventory value
//   //   if (selectedValue === 10) {
//   //     setStoreInventory("Ten");
//   //     setAvailableQuantity("10");
//   //     setPreviousQuantity("5");
//   //     setReasonOfAdjustment("Initial stock");
//   //   } else if (selectedValue === 20) {
//   //     setStoreInventory("Twenty");
//   //     setAvailableQuantity("20");
//   //     setPreviousQuantity("10");
//   //     setReasonOfAdjustment("Restock");
//   //   } else if (selectedValue === 30) {
//   //     setStoreInventory("Thirty");
//   //     setAvailableQuantity("30");
//   //     setPreviousQuantity("15");
//   //     setReasonOfAdjustment("Bulk purchase");
//   //   } else {
//   //     setStoreInventory("");
//   //     setAvailableQuantity("");
//   //     setPreviousQuantity("");
//   //     setReasonOfAdjustment("");
//   //   }
//   // };

//   // const [inventoryOptions, setInventoryOptions] = useState([]);
//   // const [subDataOptions, setSubDataOptions] = useState([]);
//   // const [inventory, setInventory] = useState("");
//   // const [subData, setSubData] = useState("");
//   // const [availableQuantity, setAvailableQuantity] = useState("");
//   // const [previousQuantity, setPreviousQuantity] = useState("");
//   // const [reasonOfAdjustment, setReasonOfAdjustment] = useState("");

//   // useEffect(() => {
//   //   // Mock function to simulate fetching data from the database
//   //   const fetchInventoryOptions = async () => {
//   //     // Replace this with your actual API call
//   //     const response = await new Promise((resolve) => {
//   //       setTimeout(() => {
//   //         resolve([
//   //           { value: "type1", label: "Type One" },
//   //           { value: "type2", label: "Type Two" },
//   //           { value: "type3", label: "Type Three" },
//   //           { value: "type4", label: "Type Four" },
//   //         ]);
//   //       }, 1000);
//   //     });
//   //     setInventoryOptions(response);
//   //   };

//   //   fetchInventoryOptions();
//   // }, []);

//   // useEffect(() => {
//   //   // Fetch subdata options based on the selected inventory
//   //   const fetchSubDataOptions = async () => {
//   //     // Replace this with your actual API call
//   //     const subDataResponse = await new Promise((resolve) => {
//   //       setTimeout(() => {
//   //         const data = {
//   //           type1: [
//   //             { value: "sub1", label: "Sub Data 1" },
//   //             { value: "sub2", label: "Sub Data 2" },
//   //           ],
//   //           type2: [
//   //             { value: "sub3", label: "Sub Data 3" },
//   //             { value: "sub4", label: "Sub Data 4" },
//   //           ],
//   //           type3: [
//   //             { value: "sub5", label: "Sub Data 5" },
//   //             { value: "sub6", label: "Sub Data 6" },
//   //           ],
//   //           type4: [
//   //             { value: "sub7", label: "Sub Data 7" },
//   //             { value: "sub8", label: "Sub Data 8" },
//   //           ],
//   //         };
//   //         resolve(data[inventory] || []);
//   //       }, 500);
//   //     });
//   //     setSubDataOptions(subDataResponse);
//   //   };

//   //   if (inventory) {
//   //     fetchSubDataOptions();
//   //   }
//   // }, [inventory]);

//   // const handleInventoryChange = (event) => {
//   //   const selectedValue = event.target.value;
//   //   setInventory(selectedValue);
//   //   setSubData("");
//   // };

//   // const handleSubDataChange = (event) => {
//   //   setSubData(event.target.value);
//   // };

//   // return (
//   //   <>
//   //     <form className="form">
//   //       <div className="flex flex-wrap -mx-3 mb-6">
//   //         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//   //           <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//   //             <InputLabel id="inventory-label">Inventory</InputLabel>
//   //             <Select
//   //               labelId="inventory-label"
//   //               id="inventory"
//   //               value={inventory}
//   //               label="Inventory"
//   //               sx={{ width: "100%" }}
//   //               onChange={handleInventoryChange}
//   //             >
//   //               {inventoryOptions.map((option) => (
//   //                 <MenuItem key={option.value} value={option.value}>
//   //                   {option.label}
//   //                 </MenuItem>
//   //               ))}
//   //             </Select>
//   //           </FormControl>
//   //         </div>
//   //         </div>
//   //         <div className="flex flex-wrap -mx-3 mb-6">
//   //           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//   //             <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//   //               <InputLabel id="subdata-label">Sub Data</InputLabel>
//   //               <Select
//   //                 labelId="subdata-label"
//   //                 id="subdata"
//   //                 value={subData}
//   //                 label="Sub Data"
//   //                 sx={{ width: "100%" }}
//   //                 onChange={handleSubDataChange}
//   //               >
//   //                 {subDataOptions.map((option) => (
//   //                   <MenuItem key={option.value} value={option.value}>
//   //                     {option.label}
//   //                   </MenuItem>
//   //                 ))}
//   //               </Select>
//   //             </FormControl>
//   //           </div>
//   //         {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//   //           <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//   //             <TextField
//   //               id="available-quantity"
//   //               label="Available Quantity"
//   //               value={availableQuantity}
//   //               onChange={(e) => setAvailableQuantity(e.target.value)}
//   //               disabled
//   //             />
//   //           </FormControl>
//   //         </div> */}
//   //         <div className="w-full md:w-1/2 px-3">
//   //           <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//   //             <TextField
//   //               id="previous-quantity"
//   //               label="Previous Quantity"
//   //               value={previousQuantity}
//   //               onChange={(e) => setPreviousQuantity(e.target.value)}

//   //             />
//   //           </FormControl>

//   //         </div>
//   //       </div>
//   //       <div className="flex flex-wrap -mx-3 mb-6">
//   //         {/* <div className="w-full md:w-1/2 px-3">
//   //           <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//   //             <TextField
//   //               id="previous-quantity"
//   //               label="Previous Quantity"
//   //               value={previousQuantity}
//   //               onChange={(e) => setPreviousQuantity(e.target.value)}
//   //               disabled
//   //             />
//   //           </FormControl>

//   //         </div> */}
//   //         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//   //           <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//   //             <TextField
//   //               id="available-quantity"
//   //               label="Available Quantity"
//   //               value={availableQuantity}
//   //               onChange={(e) => setAvailableQuantity(e.target.value)}
//   //               disabled
//   //             />
//   //           </FormControl>
//   //         </div>
//   //         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//   //           <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//   //             <TextField
//   //               id="reason-of-adjustment"
//   //               label="Reason of Adjustment"
//   //               value={reasonOfAdjustment}
//   //               onChange={(e) => setReasonOfAdjustment(e.target.value)}
//   //             />
//   //           </FormControl>
//   //         </div>
//   //       </div>
//   //       <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//   //         <Button
//   //           className="btn-final bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//   //           type="submit"
//   //         >
//   //           Save
//   //         </Button>
//   //       </FormControl>
//   //     </form>
//   const [inventoryType, setInventoryType] = useState("");
//   const [inventoryOptions, setInventoryOptions] = useState([]);
//   const [subDataOptions, setSubDataOptions] = useState([]);
//   const [inventory, setInventory] = useState("");
//   const [subData, setSubData] = useState("");
//   const [availableQuantity, setAvailableQuantity] = useState("");
//   const [previousQuantity, setPreviousQuantity] = useState("");
//   const [reasonOfAdjustment, setReasonOfAdjustment] = useState("");

//   useEffect(() => {
//     if (inventoryType) {
//       fetchInventoryOptions(inventoryType);
//     }
//   }, [inventoryType]);

//   const fetchInventoryOptions = async (type) => {
//     try {
//       const response = await axios.get(`http://localhost:5500/${type}`);
//       setInventoryOptions(response.data);
//     } catch (error) {
//       console.error("Error fetching inventory options:", error);
//     }
//   };

//   const handleInventoryTypeChange = (event) => {
//     const selectedType = event.target.value;
//     setInventoryType(selectedType);
//     fetchInventoryOptions(selectedType);
//   };

//   const handleInventoryChange = async (event) => {
//     const selectedValue = event.target.value;
//     setInventory(selectedValue);

//     try {
//       const response = await axios.get(`http://localhost:5500/${inventoryType}/${selectedValue}`);
//       setAvailableQuantity(response.data.availableQuantity || "");
//     } catch (error) {
//       console.error("Error fetching available quantity:", error);
//     }

//     // const selectedInventory = inventoryOptions.find(option => option._id === selectedValue);
//     // if (selectedInventory) {
//     //   // setSubDataOptions(selectedInventory.subData);
//     //   // setSubData('');
//     // } else {
//     //   // setSubDataOptions([]);
//     //   setSubData('');
//     // }
//   };

//   // const handleSubDataChange = (event) => {
//   //   setSubData(event.target.value);
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const data = {
//       inventoryType,
//       inventory,
//       availableQuantity,
//       previousQuantity,
//       reasonOfAdjustment,
//     };

//     try {
//       const response = await axios.post(
//         `http://localhost:5500/${inventoryType}`,
//         data
//       );
//       console.log("Data saved:", response.data);
//     } catch (error) {
//       console.error("Error saving data:", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <FormControl fullWidth margin="normal">
//           <InputLabel id="inventory-type-label">Inventory Type</InputLabel>
//           <Select
//             labelId="inventory-type-label"
//             value={inventoryType}
//             onChange={handleInventoryTypeChange}
//           >
//             <MenuItem value="labs_items">Labs Items</MenuItem>
//             <MenuItem value="school_items">School Items</MenuItem>
//             <MenuItem value="canteen_items">Canteen Items</MenuItem>
//             <MenuItem value="sports_items">Sports Items</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth margin="normal">
//           <InputLabel id="inventory-label">Inventory</InputLabel>
//           <Select
//             labelId="inventory-label"
//             value={inventory}
//             onChange={handleInventoryChange}
//             // disabled={!inventoryOptions.length}
//           >
//             {inventoryOptions.map((option) => (
//               <MenuItem key={option._id} value={option._id}>
//                 {option.item_name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         {/* <FormControl fullWidth margin="normal">
//         <InputLabel id="sub-data-label">Sub Data</InputLabel>
//         <Select
//           labelId="sub-data-label"
//           value={subData}
//           onChange={handleSubDataChange}
//           // disabled={!subDataOptions.length}
//         >
//           {subDataOptions.map((subOption, index) => (
//             <MenuItem key={index} value={subOption}>
//               {subOption}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl> */}

//         <TextField
//           fullWidth
//           margin="normal"
//           label="Available Quantity"
//           value={availableQuantity}
//           onChange={(e) => setAvailableQuantity(e.target.value)}
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Previous Quantity"
//           value={previousQuantity}
//           onChange={(e) => setPreviousQuantity(e.target.value)}
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Reason of Adjustment"
//           value={reasonOfAdjustment}
//           onChange={(e) => setReasonOfAdjustment(e.target.value)}
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>

//       {/* <form className="form">
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//               <InputLabel id="inventory-label">Inventory</InputLabel>
//               <Select
//                 labelId="inventory-label"
//                 id="inventory"
//                 value={inventory}
//                 label="Inventory"
//                 sx={{ width: "100%" }}
//                 onChange={handleInventoryChange}
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 <MenuItem value={10}>Ten</MenuItem>
//                 <MenuItem value={20}>Twenty</MenuItem>
//                 <MenuItem value={30}>Thirty</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//               <InputLabel id="store-inventory-label">
//                 Store Inventory
//               </InputLabel>
//               <Select
//                 labelId="store-inventory-label"
//                 id="store-inventory"
//                 value={storeInventory}
//                 label="Store Inventory"
//                 sx={{ width: "100%" }}
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 <MenuItem value={10}>Ten</MenuItem>
//                 <MenuItem value={20}>Twenty</MenuItem>
//                 <MenuItem value={30}>Thirty</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//           <div className="w-full md:w-1/2 px-3">
//             <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//               <TextField
//                 id="available-quantity"
//                 label="Available Quantity"
//                 value={availableQuantity}
//                 onChange={(e) => setAvailableQuantity(e.target.value)}
//               />
//             </FormControl>
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//               <TextField
//                 id="previous-quantity"
//                 label="Previous Quantity"
//                 value={previousQuantity}
//                 onChange={(e) => setPreviousQuantity(e.target.value)}
//               />
//             </FormControl>
//           </div>
//           <div className="w-full md:w-1/2 px-3">
//             <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//               <TextField
//                 id="reason-of-adjustment"
//                 label="Reason of Adjustment"
//                 value={reasonOfAdjustment}
//                 onChange={(e) => setReasonOfAdjustment(e.target.value)}
//               />
//             </FormControl>
//           </div>
//         </div>
//         <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//           <Button
//             className="btn-final bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Save
//           </Button>
//         </FormControl>
//       </form> */}
//       {/* <form className="form">
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <FormControl
//               sx={{ m: 1, minWidth: 120, width: "100%" }}
//               // size="small"
//             >
//               <InputLabel id="demo-select-small-label">Inventory</InputLabel>
//               <Select
//                 labelId="demo-select-small-label"
//                 id="demo-select-small"
//                 // value={age}
//                 label="Inventory"
//                 sx={{ width: "100%" }}
//                 // onChange={handleChange}
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 <MenuItem value={40}>Ten</MenuItem>
//                 <MenuItem value={20}>Twenty</MenuItem>
//                 <MenuItem value={30}>Thirty</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <FormControl
//               sx={{ m: 1, minWidth: 120, width: "100%" }}
//               // size="small"
//             >
//               <InputLabel id="demo-select-small-label">
//                 Store Inventory
//               </InputLabel>
//               <Select
//                 labelId="demo-select-small-label"
//                 id="demo-select-small"
//                 // value={age}
//                 label="Store Inventory"
//                 sx={{ width: "100%" }}
//                 // onChange={handleChange}
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 <MenuItem value={10}>Ten</MenuItem>
//                 <MenuItem value={20}>Twenty</MenuItem>
//                 <MenuItem value={30}>Thirty</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//           <div className="w-full md:w-1/2 px-3">
//             <FormControl
//               sx={{ m: 1, minWidth: 120, width: "100%" }}
//               // size="small"
//             >
//               <TextField id="standard" label="Available Quantity" />
//             </FormControl>
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <FormControl
//               sx={{ m: 1, minWidth: 120, width: "100%" }}
//               // size="small"
//             >
//               <TextField id="standard" label="Previous Quantity" />
//             </FormControl>
//           </div>
//           <div className="w-full md:w-1/2 px-3">
//             <FormControl
//               sx={{ m: 1, minWidth: 120, width: "100%" }}
//               // size="small"
//             >
//               <TextField id="standard" label="Reason of Adjustment" />
//             </FormControl>
//           </div>
//         </div>
//         <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
//           <button
//             className="btn-final bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Save
//           </button>
//         </FormControl>
//         {/* </div> */}
//       {/* </form> */}
//     </>
//   );
// }

// export default More;

import React, { useState, useEffect } from "react";
import {
  Select,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import axios from "axios";
import HistoryIcon from "@mui/icons-material/History";
import "../css/form.css";
import { Routes, Link, Route } from "react-router-dom";
import FullWidthTabs from "./Hello";
import Logs from "./Logs";

function More() {
  // const [inventoryType, setInventoryType] = useState("");
  // const [inventoryOptions, setInventoryOptions] = useState([]);
  // const [inventory, setInventory] = useState("");
  // const [availableQuantity, setAvailableQuantity] = useState("");
  // const [previousQuantity, setPreviousQuantity] = useState("");
  // const [reasonOfAdjustment, setReasonOfAdjustment] = useState("");

  // useEffect(() => {
  //   if (inventoryType) {
  //     fetchInventoryOptions(inventoryType);
  //   }
  // }, [inventoryType]);

  // const fetchInventoryOptions = async (type) => {
  //   try {
  //     const response = await axios.get(`http://localhost:5500/${type}`);
  //     setInventoryOptions(response.data);
  //   } catch (error) {
  //     console.error("Error fetching inventory options:", error);
  //   }
  // };

  // const handleInventoryTypeChange = (event) => {
  //   const selectedType = event.target.value;
  //   setInventoryType(selectedType);
  //   setInventory("");
  //   setAvailableQuantity("");
  // };

  // const handleInventoryChange = async (event) => {
  //   const selectedValue = event.target.value;
  //   setInventory(selectedValue);

  //   try {
  //     const response = await axios.get(`http://localhost:5500/${inventoryType}/${selectedValue}`);
  //     setPreviousQuantity(response.data.quantity || "");
  //   } catch (error) {
  //     console.error("Error fetching available quantity:", error);
  //   }
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const data = {
  //     inventoryType,
  //     inventory,
  //     availableQuantity,
  //     previousQuantity,
  //     reasonOfAdjustment,
  //   };

  //   try {
  //     const response = await axios.post(
  //       `http://localhost:5500/${inventoryType}`,
  //       data
  //     );
  //     console.log("Data saved:", response.data);
  //   } catch (error) {
  //     console.error("Error saving data:", error);
  //   }
  // };
  const [inventoryType, setInventoryType] = useState("");
  const [inventoryOptions, setInventoryOptions] = useState([]);
  const [inventory, setInventory] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [previousQuantity, setPreviousQuantity] = useState("");
  const [reasonOfAdjustment, setReasonOfAdjustment] = useState("");
  const [showLogs, setShowLogs] = useState(false);

  useEffect(() => {
    if (inventoryType) {
      fetchInventoryOptions(inventoryType);
    }
  }, [inventoryType]);

  useEffect(() => {
    if (inventory) {
      fetchInventoryDetails(inventory);
    }
  }, [inventory]);

  const fetchInventoryOptions = async (type) => {
    try {
      const response = await axios.get(`http://localhost:5000/${type}`);
      setInventoryOptions(response.data);
    } catch (error) {
      console.error("Error fetching inventory options:", error);
    }
  };

  const fetchInventoryDetails = async (inventory) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/${inventoryType}/${inventory._id}`
      );
      setPreviousQuantity(response.data.quantity);
    } catch (error) {
      console.error("Error fetching inventory details:", error);
    }
  };

  const handleInventoryTypeChange = (event) => {
    const selectedType = event.target.value;
    setInventoryType(selectedType);
    fetchInventoryOptions(selectedType);
  };

  const handleInventoryChange = (event) => {
    const selectedValue = event.target.value;
    setInventory(selectedValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      quantity: availableQuantity,
      reasonOfAdjustment,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/${inventoryType}/${inventory._id}`,
        data
      );
      console.log("Data updated:", response.data);
      fetchInventoryDetails(inventory);
    } catch (error) {
      console.error("Error updating data:", error);
    }

    await axios.post(`http://localhost:5000/logs`, {
      inventory_name: inventoryType.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      item_name: inventory.item_name,
      previous_quantity: previousQuantity,
      new_quantity: availableQuantity,
      reason: reasonOfAdjustment,
      timestamp: new Date().toISOString(),
    });
    setInventoryType("");
    setInventory("");
    setPreviousQuantity("");
    setAvailableQuantity("");
    setReasonOfAdjustment("");
    // console.log("response2",response2);
  };
  return (
    <>
      {showLogs ? (
        <Logs />
      ) : (
        <>
          <div className="container">
            <button
              className="container3"
              onClick={() => {
                setShowLogs(true);
              }}

            >
              {/* <Link to="logs"> */}
              <HistoryIcon />
              History
              {/* </Link> */}
            </button>
            <form className="form" onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <FormControl fullWidth  >
                    <InputLabel id="inventory-type-label">
                      Inventory
                    </InputLabel>
                    <Select
                      id="demo-select-small"
                      labelId="inventory-type-label"
                      label="Inventory"
                      value={inventoryType}
                      onChange={handleInventoryTypeChange}
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="labs_items">Labs Items</MenuItem>
                      <MenuItem value="school_items">School Items</MenuItem>
                      <MenuItem value="canteen_items">Canteen Items</MenuItem>
                      <MenuItem value="sports_items">Sports Items</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="inventory-label">Items</InputLabel>
                    <Select
                      labelId="inventory-label"
                      label="Items"
                      value={inventory}
                      onChange={handleInventoryChange}
                      disabled={!inventoryOptions.length}
                    >
                      {/* <MenuItem value="">None</MenuItem> */}
                      {inventoryOptions.map((option) => (
                        <MenuItem key={option._id} value={option}>
                          {option.item_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Available Quantity"
                    value={availableQuantity}
                    onChange={(e) => setAvailableQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Previous Quantity"
                    value={previousQuantity}
                    onChange={(e) => setPreviousQuantity(e.target.value)}
                    disabled
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Reason of Adjustment"
                    value={reasonOfAdjustment}
                    onChange={(e) => setReasonOfAdjustment(e.target.value)}
                  />
                </div>
              </div>
              <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
                <button
                  className="btn-final bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Save
                </button>
              </FormControl>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default More;
