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
import Logs from "./Logs";

function More() {
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
      const response = await axios.get(`https://school-inventory-management-system-server-tau.vercel.app/${type}`);
      setInventoryOptions(response.data);
    } catch (error) {
      console.error("Error fetching inventory options:", error);
    }
  };

  const fetchInventoryDetails = async (inventory) => {
    try {
      const response = await axios.get(
        `https://school-inventory-management-system-server-tau.vercel.app/${inventoryType}/${inventory._id}`
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
        `https://school-inventory-management-system-server-tau.vercel.app/${inventoryType}/${inventory._id}`,
        data
      );
      console.log("Data updated:", response.data);
      fetchInventoryDetails(inventory);
    } catch (error) {
      console.error("Error updating data:", error);
    }

    await axios.post(`https://school-inventory-management-system-server-tau.vercel.app/logs`, {
      inventory_name: inventoryType
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
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
              <HistoryIcon />
              History
            </button>
            <form className="form" onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <FormControl fullWidth>
                    <InputLabel id="inventory-type-label">Inventory</InputLabel>
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
