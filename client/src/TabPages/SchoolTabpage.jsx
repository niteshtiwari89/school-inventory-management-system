import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import Checkbox from '@mui/material/Checkbox';
import { useEffect } from "react";
// import Page2 from "./Page2";
// import { useState } from "react";

// const products=[]
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }
// const rows = [
// //   createData("India", "IN", 1324171354, 3287263),
// //   createData("China", "CN", 1403500365, 9596961),
// //   createData("Italy", "IT", 60483973, 301340),
// //   createData("United States", "US", 327167434, 9833520),
// //   createData("Canada", "CA", 37602103, 9984670),
// //   createData("Australia", "AU", 25475400, 7692024),
// //   createData("Germany", "DE", 83019200, 357578),
// //   createData("Ireland", "IE", 4857000, 70273),
// //   createData("Mexico", "MX", 126577691, 1972550),
// //   createData("Japan", "JP", 126317000, 377973),
// //   createData("France", "FR", 67022000, 640679),
// //   createData("United Kingdom", "GB", 67545757, 242495),
// //   createData("Russia", "RU", 146793744, 17098246),
// //   createData("Nigeria", "NG", 200962417, 923768),
// //   createData("Brazil", "BR", 210147125, 8515767),


// ];

// const [data,setData]=useState([]);
//   const getData=()=>{
//     fetch('data.json'
//     ,{
//       headers : {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])

export default function SchoolStickyHeadTable({ title }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  useEffect(() => {
    // If you're using Create React App and the file is in the public folder
    fetch("/src/data/products.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  },[]);
// let rows = data;height: "48vh",
  return (
    <>
      <h2>{title}</h2>
      <Paper sx={{ width: "100%",height:"45vh", overflow: "hidden" }}>
        <TableContainer sx={{ height: "39vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
              {/* <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    // checked={rowCount > 0 && numSelected === rowCount}
                    // onChange={onSelectAllClick}
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell> */}
                <TableCell>Sr. No. </TableCell>
                
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length >0 && data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                    >
                        {/* <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    // checked={rowCount > 0 && numSelected === rowCount}
                    // onChange={onSelectAllClick}
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell> */}
                      <TableCell>{index + 1}</TableCell>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
