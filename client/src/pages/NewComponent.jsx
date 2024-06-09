import React, { useState, useEffect } from 'react';
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';

const NewComponent = () => {
  const [open, setOpen] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [submitnewData, setSubmitnewData] = useState([]);
  const [editingData, setEditingData] = useState(null);
  const [data, setData] = useState({
    name: '',
    code: '',
    size: '',
    population: ''
  });

  useEffect(() => {
    fetchProspectData();
  }, [updateList]);

  const fetchProspectData = () => {
    axios
      .get("http://localhost:5000/school_items")
      .then((response) => {
        setSubmitnewData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/school_items", data)
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
      .delete(`http://localhost:5000/school_items/${id}`)
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
      .put(`http://localhost:5000/school_items/${editingData._id}`, data)
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
      name: '',
      code: '',
      population: '',
      size: ''
    });
  };

  const user = {
    name: 'Akash Chhangani'
  };

  return (
    <>
      <div className='hello'>
        <PageTitleWrapper sx={{padding:"none"}}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h4" component="h3" gutterBottom>
                School Items
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
                Create Prospect
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
              <AccountCircleIcon
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'green',
                  marginRight: '5px'
                }}
              />{' '}
              {editingData ? 'Edit Prospect' : 'Create Prospect'}
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
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={data.name}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="code"
                    name="code"
                    label="Code"
                    variant="outlined"
                    value={data.code}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="size"
                    name="size"
                    label="Size"
                    variant="outlined"
                    value={data.size}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="population"
                    name="population"
                    label="Population"
                    variant="outlined"
                    value={data.population}
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

        <Container>
          {submitnewData.length > 0 ? (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12}>
                <TableContainer component={Paper} sx={{height:"75vh"}}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Code</TableCell>
                        <TableCell align="center">Size</TableCell>
                        <TableCell align="center">Population</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {submitnewData.map((data, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="center">{data.name}</TableCell>
                          <TableCell align="center">{data.code}</TableCell>
                          <TableCell align="center">{data.size}</TableCell>
                          <TableCell align="center">{data.population}</TableCell>
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

export default NewComponent;
