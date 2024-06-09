import { useState, useEffect } from 'react';
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
  Typography
} from '@mui/material';
import "../css/newcss.css";
import PageTitleWrapper from '../helloe/PageTitleWrapper';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';

const Labs = () => {
  const [open, setOpen] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [submitnewData, setSubmitnewData] = useState([]);
  const [editingData, setEditingData] = useState(null);
  const [data, setData] = useState({
    item_name: '',
    unit: '',
    dimension: '',
    weight: '',
    barcode: '',
    subject: '',
    refrigirator: '',
    hazardious: '',
    cost: '',
    purchase_date: '',
    expiry_date: ''
  });

  useEffect(() => {
    fetchProspectData();
  }, [updateList]);

  const fetchProspectData = () => {
    axios
      .get("http://localhost:5000/labs_items")
      .then((response) => {
        setSubmitnewData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/labs_items", data)
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
      .delete(`http://localhost:5000/labs_items/${id}`)
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
      .put(`http://localhost:5000/labs_items/${editingData._id}`, data)
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
      item_name: '',
      unit: '',
      dimension: '',
      weight: '',
      barcode: '',
      subject: '',
      refrigirator: '',
      hazardious: '',
      cost: '',
      purchase_date: '',
      expiry_date: ''
    });
  };

  return (
    <>
      <div className='hello'>
        <PageTitleWrapper sx={{padding:"none"}}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h4" component="h3" gutterBottom>
                Labs Items
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                sx={{ margin: '0.6rem' }}
                onClick={handleClickOpen}
              >
                <AddTwoToneIcon
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginRight: '5px'
                  }}
                />{' '}
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
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '24px'
              }}
            >
              {/* <AccountCircleIcon
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'green',
                  marginRight: '5px'
                }}
              />{' '} */}
              {editingData ? 'Edit Item' : 'Add Lab Item'}
            </Typography>
          </DialogTitle>

          <DialogContent
            sx={{
              overflowY: 'scroll',
              '&::-webkit-scrollbar': {
                width: '0 !important'
              },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none'
            }}
          >
            <DialogContentText id="alert-dialog-description">
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: '1rem' }}
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
                    sx={{ marginTop: '1rem' }}
                    id="unit"
                    name="unit"
                    label="Unit"
                    variant="outlined"
                    value={data.unit}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: '1rem' }}
                    id="dimension"
                    name="dimension"
                    label="Dimension"
                    variant="outlined"
                    value={data.dimension}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: '1rem' }}
                    id="weight"
                    name="weight"
                    label="Weight"
                    variant="outlined"
                    value={data.weight}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: '1rem' }}
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
                    sx={{ marginTop: '1rem' }}
                    id="subject"
                    name="subject"
                    label="Subject"
                    variant="outlined"
                    value={data.subject}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: '1rem' }}
                    id="refrigirator"
                    name="refrigirator"
                    label="Refrigirator"
                    variant="outlined"
                    value={data.refrigirator}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginTop: '1rem' }}
                    id="hazardious"
                    name="hazardious"
                    label="Hazardious"
                    variant="outlined"
                    value={data.hazardious}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="cost"
                    name="cost"
                    label="Cost"
                    variant="outlined"
                    value={data.cost}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="purchase_date"
                    name="purchase_date"
                    label="Purchase Date"
                    variant="outlined"
                    value={data.purchase_date}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="expiry_date"
                    name="expiry_date"
                    label="Expiry Date"
                    variant="outlined"
                    value={data.expiry_date}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              color="success"
              sx={{ margin: '0.6rem' }}
              onClick={() => {
                if (editingData) {
                  handleSaveEdit();
                } else {
                  handleSubmit();
                }
              }}
            >
              {editingData ? 'Save' : 'Submit'}
            </Button>
            <Button
              variant="contained"
              sx={{ margin: '1rem' }}
              onClick={handleClose}
            >
              {editingData ? 'Cancel' : 'Cancel'}
            </Button>
          </DialogActions>
        </Dialog>

        <Container sx={{padding:"0",maxWidth:"90vw",minWidth:"85vw"}}>
          {submitnewData.length > 0 ? (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12}>
                <TableContainer component={Paper} sx={{maxHeight:"75vh"}}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Item Name</TableCell>
                        <TableCell align="center">Unit</TableCell>
                        <TableCell align="center">Dimension</TableCell>
                        <TableCell align="center">Weight</TableCell>
                        <TableCell align="center">Barcode</TableCell>
                        <TableCell align="center">Subject</TableCell>
                        <TableCell align="center">Refrigirator</TableCell>
                        <TableCell align="center">Hazardious</TableCell>
                        <TableCell align="center">Cost</TableCell>
                        <TableCell align="center">Purchase Date</TableCell>
                        <TableCell align="center">Expiry Date</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {submitnewData.map((data, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="center">{data.item_name}</TableCell>
                          <TableCell align="center">{data.unit}</TableCell>
                          <TableCell align="center">{data.dimension}</TableCell>
                          <TableCell align="center">{data.weight}</TableCell>
                          <TableCell align="center">{data.barcode}</TableCell>
                          <TableCell align="center">{data.subject}</TableCell>
                          <TableCell align="center">{data.refrigirator}</TableCell>
                          <TableCell align="center">{data.hazardious}</TableCell>
                          <TableCell align="center">{data.cost}</TableCell>
                          <TableCell align="center">{data.purchase_date}</TableCell>
                          <TableCell align="center">{data.expiry_date}</TableCell>
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
    </>
  );
};

export default Labs;
