import React, { useContext, useState } from "react";
import axios from "axios";
import "./Login.css";
import  UserContex1  from "./Usercontext";

export default function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [data1, setDta1] = useState({});
   const {setValue}=useContext(UserContex1);
    async function handleSubmit(e) {
        try {
            e.preventDefault();
            const response = await axios.post("http://localhost:6990/api/auth/login", {
                email,
                password,
            });
            if(!response)
            {
                console.log("error")
            }
            else{
            setValue(response)
            console.log(response.data);
            setDta1(response.data.data);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <button type="submit">Submit</button>
            </form>
            {data1 && (
                <div className="userLogin">
                    <h4>Your details saved in the database:</h4>
                    <h4>Your email: {data1.email}</h4>
                    <h4>Your address: {data1.address}</h4>
                    <h4>Your name: {data1.name}</h4>
                    <h4>Your mobile number: {data1.mobileno}</h4>
                </div>
            )}
        </div>
    );
}
