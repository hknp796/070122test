import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Registration() {
  const link = "http://localhost:5000/registration";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("");
  const regData = { name, email, password, place };
  function submitRegister(e) {
    e.preventDefault();
    axios.post(link, regData);
  }
  return (
    <div>
      <div>
        <h1>Registration</h1>
        <form onSubmit={submitRegister}>
          <label htmlFor="">Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <label htmlFor="">Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="">Place</label>
          <input type="text" onChange={(e) => setPlace(e.target.value)} />
          <input type="submit" value="Register" />
        </form>

        <Link to="/">Login </Link>
      </div>
    </div>
  );
}

export default Registration;
