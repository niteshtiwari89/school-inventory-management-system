import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
// import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js";
// import LoginPage from './layout/LoginPage.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    {/* <LoginPage/> */}
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <App />
    {/* </LocalizationProvider> */}
    </AuthProvider>
  </React.StrictMode>
);
