import React, { useState } from "react";
import axios from "axios";
import "./Regsiter.css"
import  UserContex1  from "./Usercontext";
import { useContext } from "react";
export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mobileno, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [data1, setDat1] = useState({});
  const {setValue}=useContext(UserContex1);
  async function handleonsubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6990/api/auth/register",
        {
          name,
          email,
          mobileno,
          password,
          address,
        }
      );
      if(!response)
      {
        console.log("error");
      }
      else{
        setValue(response)
      console.log(response.data);

      setDat1(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="register-container">
      <form onSubmit={handleonsubmit}>
        <h1>Register</h1>
        <label htmlFor="fname">Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="phonenumber">Phone Number:</label>
        <input
          type="number"
          id="phonenumber"
          name="phonenumber"
          placeholder="Enter your phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {data1 && (
        <div className="userdetail">
          <h4>Your details in the database are saved as:</h4>
          <h4>Your email is: {data1.email}</h4>
          <h4>Your address is: {data1.address}</h4>
          <h4>Your name is: {data1.name}</h4>
          <h4>Your mobile number is: {data1.mobileno}</h4>
        </div>
      )}
    </div>
  );
}
