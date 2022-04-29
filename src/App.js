import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, ReactRouter } from "react-router-dom";
import './App.css';
import Register from "./pages/Register";
import SignUp from "./pages/Signup";
import axios from "axios";

function App() {


  const [videoShow, setVideoShow] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user_id, setUserId] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() =>{

    axios.post('http://localhost:8000/user/auth/silent-refresh',{}, {
      withCredentials:true
    }).then(res=> {
      const {accessToken} = res.data;
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      setUserId(res.data.user_id);
      setIsLoggedIn(true);
    });


  },[])

  useEffect(() =>{
    if(isLoggedIn){
      axios.get('http://localhost:8000/user/' + user_id)
      .then(res=> {
        setUser(res.data);
      });
    }
  },[isLoggedIn,user_id])

  return (
    <>
    {isLoggedIn && <nav>{user.id} - {user.email} - {user.name} 로그인 되었습니다.</nav>}
    <Routes> 
      <Route path="/*" element={<SignUp/>} />
      <Route path="/register" element={
        <Register
          user_id={user_id}
          videoShow={videoShow}
          setVideoShow={setVideoShow}
        />} />
    </Routes>
    </>
  );
}

export default App;
