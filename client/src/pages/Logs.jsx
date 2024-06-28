import React, { useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../css/logs.css";
import More from "./More";

export default function Logs() {
  const [showLogs, setShowlogs] = useState(false);
  const [submitnewData, setSubmitnewData] = useState([]);
  useEffect(() => {
    fetchProspectData();
  },[]);

  const fetchProspectData = () => {
    axios
      .get("https://school-inventory-management-system-server-tau.vercel.app/logs")
      .then((response) => {
        setSubmitnewData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <>
      {showLogs ? (
        <More />
      ) : (
        <div className="logs_container">
          <button className="logbutton" onClick={() => setShowlogs(true)}>
            <ArrowBackIcon /> BACK
          </button>
          <Container sx={{ padding: "0", maxWidth: "90vw", minWidth: "85vw" }}>
            {submitnewData.length > 0 ? (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12}>
                <TableContainer component={Paper} sx={{ maxHeight: "75vh" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Sr No.</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Item Name</TableCell>
                        <TableCell align="center">Previous Quantity</TableCell>
                        <TableCell align="center">Updated Quantity</TableCell>
                        <TableCell align="center">Reason</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {submitnewData.map((data,index) => (
                      <TableRow>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="center">{data.inventory_name}</TableCell>
                        <TableCell align="center">{data.item_name}</TableCell>
                        <TableCell align="center">{data.previous_quantity}</TableCell>
                        <TableCell align="center">{data.new_quantity}</TableCell>
                        <TableCell align="center">{data.reason}</TableCell>
                      </TableRow>
                      ))} 
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
             ) : (<h1>No data found</h1>
            )} 
          </Container>
        </div>
      )}
    </>
  );
}
