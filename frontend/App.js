import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Home from "./component/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addproducts" element={<Home />}>
        </Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
