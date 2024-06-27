import { useState, useEffect } from "react";
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
import "../css/newcss.css";
// import dayjs from 'dayjs';
// import DatePicker from "react-datepicker";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DateField } from '@mui/x-date-pickers/DateField';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PageTitleWrapper from "../helloe/PageTitleWrapper";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Sports = () => {
  // const [open, setOpen] = useState(false);
  // const [updateList, setUpdateList] = useState(false);
  // const [submitnewData, setSubmitnewData] = useState([]);
  // const [editingData, setEditingData] = useState(null);
  // const [data, setData] = useState({
  //   item_name: "",
  //   sports_name: "",
  //   manufacturer: "",
  //   brand: "",
  //   barcode: "",
  //   cost: "",
  //   vendor_name: "",
  //   quantity: "",
  //   purchase_date: "",
  // });

  // useEffect(() => {
  //   fetchProspectData();
  // }, [updateList]);

  // const fetchProspectData = () => {
  //   axios
  //     .get("http://localhost:5000/sports_items")
  //     .then((response) => {
  //       setSubmitnewData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });
  // };

  // const handleSubmit = () => {
  //   // const formattedData = { ...data, purchase_date: data.purchase_date?.toDaten()};
  //   axios
  //     .post("http://localhost:5000/sports_items")
  //     .then(() => {
  //       setUpdateList(!updateList);
  //       handleClose();
  //     })
  //     .catch((error) => {
  //       console.error("Error submitting data: ", error);
  //     });
  // };

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`http://localhost:5000/sports_items/${id}`)
  //     .then(() => {
  //       setUpdateList(!updateList);
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting data: ", error);
  //     });
  // };

  // const handleEditTable = (data) => {
  //   // setData({
  //   //   ...data,
  //   //   // purchase_date: data.purchase_date ? new Date(data.purchase_date) : null,
  //   // });
  //   setData(data);
  //   setOpen(true);
  //   setEditingData(data);
  // };

  // const handleSaveEdit = () => {

  //   // const formattedData = { ...data, purchase_date: data.purchase_date?.toDate() };
  //   axios
  //     .put(`http://localhost:5000/sports_items/${editingData._id}`)
  //     .then(() => {
  //       setUpdateList(!updateList);
  //       handleClose();
  //     })
  //     .catch((error) => {
  //       console.error("Error updating data: ", error);
  //     });
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  // // const handleDateChange = (date) => {
  // //   setData((prevData) => ({
  // //     ...prevData,
  // //     purchase_date: date,
  // //   }));
  // // };
  // const handleClickOpen = () => {
  //   setOpen(true);
  //   setEditingData(null);
  //   setData({
  //     item_name: "",
  //     sports_name: "",
  //     manufacturer: "",
  //     brand: "",
  //     barcode: "",
  //     cost: "",
  //     vendor_name: "",
  //     quantity: "",
  //     purchase_date: "",
  //   });
  // };
  const [open, setOpen] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [submitnewData, setSubmitnewData] = useState([]);
  const [editingData, setEditingData] = useState(null);
  const [data, setData] = useState({
    item_name: "",
      sports_name: "",
      manufacturer: "",
      brand: "",
      barcode: "",
      cost: "",
      vendor_name: "",
      quantity: "",
      purchase_date: "",
  });

  useEffect(() => {
    fetchProspectData();
  }, [updateList]);

  const fetchProspectData = () => {
    axios
      .get("http://localhost:5000/sports_items")
      .then((response) => {
        setSubmitnewData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/sports_items", data)
      .then(() => {
        setUpdateList(!updateList); 
        handleClose();
      })
      .catch((error) => {
        console.error("Error submitting data: ", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/sports_items/${id}`)
      .then(() => {
        setUpdateList(!updateList);
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };

  const handleEditTable = (data) => {
    setData(data);
    setOpen(true);
    setEditingData(data);
  };

  const handleSaveEdit = () => {
    axios
      .put(`http://localhost:5000/sports_items/${editingData._id}`, data)
      .then(() => {
        setUpdateList(!updateList);
        handleClose();
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClickOpen = () => {
    setOpen(true);
    setEditingData(null);
    setData({
      item_name: "",
          sports_name: "",
          manufacturer: "",
          brand: "",
          barcode: "",
          cost: "",
          vendor_name: "",
          quantity: "",
          purchase_date: "",
    });
  };

  return (
    <>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <div className="hello">
        <PageTitleWrapper sx={{ padding: "none" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h4" component="h3" gutterBottom>
                Sports Items
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                sx={{ margin: "0.6rem" }}
                onClick={handleClickOpen}
              >
                <AddTwoToneIcon
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                    marginRight: "5px",
                  }}
                />{" "}
                Add Item
              </Button>
            </Grid>
          </Grid>
        </PageTitleWrapper>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Typography
              sx={{
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {/* <AccountCircleIcon
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "green",
                  marginRight: "5px",
                }}
              />{" "} */}
              {editingData ? "Edit Item" : "Add Sport Item"}
            </Typography>
          </DialogTitle>

          <DialogContent
            sx={{
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "0 !important",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            <DialogContentText id="alert-dialog-description">
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: "1rem" }}
                    id="item_name"
                    name="item_name"
                    label="Item Name"
                    variant="outlined"
                    value={data.item_name}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: "1rem" }}
                    id="sports_name"
                    name="sports_name"
                    label="Sports Name"
                    variant="outlined"
                    value={data.sports_name}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="manufacturer"
                    name="manufacturer"
                    label="Manufacturer"
                    variant="outlined"
                    value={data.manufacturer}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="brand"
                    name="brand"
                    label="Brand"
                    variant="outlined"
                    value={data.brand}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="barcode"
                    name="barcode"
                    label="Barcode"
                    variant="outlined"
                    value={data.barcode}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: "1rem" }}
                    id="cost"
                    name="cost"
                    label="Cost"
                    variant="outlined"
                    value={data.cost}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: "1rem" }}
                    id="vendor_name"
                    name="vendor_name"
                    label="Vendor Name"
                    variant="outlined"
                    value={data.vendor_name}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>{" "}
                {editingData? "":<Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: "1rem" }}
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    variant="outlined"
                    value={data.quantity}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>}
                <Grid item xs={12}>
                  <TextField 
                    sx={{ marginTop: "1rem" }}
                    id="purchase_date"
                    name="purchase_date"
                    label="Purchase Date"
                    
                    // variant="outlined"
                    value={data.purchase_date}
                    onChange={handleInputChange}
                    // defaultValue={dayjs('2022-04-17')}
                    fullWidth
                    required
                  />
                    {/* <DatePicker
                   id="purchase_date"
                   name="purchase_date"
                   label="Purchase Date"
                   onChange={handleInputChange}
                    /> */}
                  {/* <DatePicker
                    label="Select Date"
                    value={data.purchase_date}
                    onChange={(newValue) => setData(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                  {/* <DatePicker
                      label="Purchase Date"
                      value={data.purchase_date}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} fullWidth required />}
                    /> */}
                  {/* <DesktopDatePicker defaultValue={dayjs('2022-04-17')} /> */}
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              color="success"
              sx={{ margin: "0.6rem" }}
              onClick={() => {
                if (editingData) {
                  handleSaveEdit();
                } else {
                  handleSubmit();
                }
              }}
            >
              {editingData ? "Save" : "Submit"}
            </Button>
            <Button
              variant="contained"
              sx={{ margin: "1rem" }}
              onClick={handleClose}
            >
              {editingData ? "Cancel" : "Cancel"}
            </Button>
          </DialogActions>
        </Dialog>

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
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Item Name</TableCell>
                        <TableCell align="center">Sports Name</TableCell>
                        <TableCell align="center">Manufacturer</TableCell>
                        <TableCell align="center">Brand</TableCell>
                        <TableCell align="center">Barcode</TableCell>
                        <TableCell align="center">Cost</TableCell>
                        <TableCell align="center">Vendor Name</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Purchase Date</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {submitnewData.map((data, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="center">{data.item_name}</TableCell>
                          <TableCell align="center">
                            {data.sports_name}
                          </TableCell>
                          <TableCell align="center">
                            {data.manufacturer}
                          </TableCell>
                          <TableCell align="center">{data.brand}</TableCell>
                          <TableCell align="center">{data.barcode}</TableCell>
                          <TableCell align="center">{data.cost}</TableCell>
                          <TableCell align="center">
                            {data.vendor_name}
                          </TableCell>
                          <TableCell align="center">{data.quantity}</TableCell>
                          <TableCell align="center">
                          {/* {data.purchase_date} */}
                          {data.purchase_date}
                          </TableCell>
                          {/* <TableCell align="center">
                            {data.population}
                          </TableCell> */}
                          <TableCell align="center">
                            <IconButton
                              aria-label="delete"
                              color="error"
                              onClick={() => handleDelete(data._id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => handleEditTable(data)}
                              color="success"
                            >
                              <EditIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          ) : (
            <h1>No data found</h1>
          )}
        </Container>
      </div>
      {/* </LocalizationProvider> */}
    </>
  );
};

export default Sports;
