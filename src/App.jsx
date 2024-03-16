import React, { useEffect } from "react";
import ReactDOM from "react-dom";
// import Dashboard from 'dashboard/App'
import "./index.css";
import { loadModule, loadScript } from "./libs";
import SideBar from "./components/SideBar";
import { RouterProvider } from "react-router-dom";
import { routeConfig } from "./routes";


const App = () => (
  <div className="container" style={{display:'flex',flexDirection:'row'}}>
    <SideBar/>
    <RouterProvider router={routeConfig()} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
