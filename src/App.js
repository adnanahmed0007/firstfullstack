 import React, { useState } from 'react'
 import {Route,Routes } from 'react-router-dom'
 import Login from './Login'
 import Register from './Register'
 import Header from './Header'
import Home from './Home'
 import InfoBody from './Info_bodypart'
 import EquipmentList from './Equipmentlist'
 import "./App.css";
 import UserContex1 from './Usercontext.js'
 const App = () => { 
  const [fvalue,setValue]=useState("");
   return (
    
    <div>
    <UserContex1.Provider value={{fvalue,setValue}}> 
    <Header />
      <Routes>
       <Route path="/" element=<Home /> />
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register /> />
        <Route path="/bodyinfo" element=<InfoBody /> />
        <Route path="/euipmentList" element=<EquipmentList /> />
         

      </Routes>
      </UserContex1.Provider>
      </div>
      
   )
 }
 
 export default App
 