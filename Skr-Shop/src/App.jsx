import React, { memo, useState, useEffect } from "react";
import Router from "./router";
import { BrowserRouter, useLocation } from "react-router-dom";
import Loading from "./components/Loading";

import "./App.scss";

function App() {
  const location = useLocation();

  let [show,setShow] = useState(true)

  useEffect(() => {
    setShow(false);
    setTimeout(()=>{
      setShow(true)
    },1000)
  },[location]);

  return (
    <div className="main">
      <div className="skr-main">
        <Router></Router>
      </div>
      <div className="a"></div>
      { !show?<Loading></Loading>:'' }
      {/* <Loading></Loading> */}
    </div>
  );
}
export default memo(App);
