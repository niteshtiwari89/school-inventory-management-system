// import React from "react";
// import Page from "./Page";
import { useState } from "react";
import "../css/form.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Form, FormGroup, Label, Input } from "reactstrap";
// import { Row, Col } from "reactstrap";

function SportsForm({onClose}) {
  // const navigate = useNavigate();
  const [name, setName] = useState('');
  const [data , setData] = useState([]);
  // const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [population, setPopulation] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/sports_items', { name, code , population , size });
      console.log('Item saved:', response.data);
      setData([...data, response.data]);
      setName('');
      setCode('');
      setPopulation('');
      setSize('');
      onClose();
    } catch (err) {
      console.error('Error saving item:', err);
    }}
  // const handleClick = () => {
  //   navigate(`/`);
  // };

  // const [data, setData] = useState({
  //   name: "",
  //   code: "",
  //   population: "",
  //   size: "",
  // });
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   // setData(...data);
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };
  // const handleSubmit = () => {
  //   console.log(data);
  // };
  
  return (
    <>
      {/* <div className="formContain"> */}
      {/* <Row xs="10">
        <Col xs="11">
          <Form>
            <FormGroup className="">
              <Label htmlFor="exampleEmail">Plain Text</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleUrl">Url</Label>
              <Input
                id="exampleUrl"
                name="url"
                placeholder="url placeholder"
                type="url"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleNumber">Number</Label>
              <Input
                id="exampleNumber"
                name="number"
                placeholder="number placeholder"
                type="number"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleDatetime">Datetime</Label>
              <Input
                id="exampleDatetime"
                name="datetime"
                placeholder="datetime placeholder"
                type="datetime"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleDate">Date</Label>
              <Input
                id="exampleDate"
                name="date"
                placeholder="date placeholder"
                type="date"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleTime">Time</Label>
              <Input
                id="exampleTime"
                name="time"
                placeholder="time placeholder"
                type="time"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleColor">Color</Label>
              <Input
                id="exampleColor"
                name="color"
                placeholder="color placeholder"
                type="color"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleSearch">Search</Label>
              <Input
                id="exampleSearch"
                name="search"
                placeholder="search placeholder"
                type="search"
              />++++
            </FormGroup>
          </Form>
        </Col>
        <Col xs="1">
          <button onClick={handleClick}>Close</button>
        </Col> 
      </Row> */}
      <form onSubmit={handleSubmit}>
        <div className="formheading">
          <div className="formhead">
            <h3>Add Sports Item</h3>
          </div>
          {/* <div className="close">
            <button onClick={handleClick}>Close</button>
          </div> */}
        </div>
        <div className="formfill mt-6">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-slate-700"
          >
            Sports Item
          </label>
          <div className="formfill1 mt-2 ">
            <input
              type="text"
              name="name"
              id="username"
              value={name} onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              // value=""
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
            Quantity
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="email"
                id="email"
                value={code} onChange={(e) => setCode(e.target.value)}
                className="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                // value=""
                // placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
            Available
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="email"
                id="email"
                value={population} onChange={(e) => setPopulation(e.target.value)}
                className="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                // value=""
                // placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-6"></div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700"
          >
            In Used
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="password"
              id="password"
              value={size} onChange={(e) => setSize(e.target.value)}
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              // value=""
            />
          </div>
        </div>
        <div className="mt-6 text-right">
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            Save changes
          </button>
        </div>
      </form>
    </>
  );
}

export default SportsForm;
