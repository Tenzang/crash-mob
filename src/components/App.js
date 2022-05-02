
import React, { Component, useState, useEffect } from 'react';
import { render } from "@testing-library/react";
import { Routes, Route, Link, useNavigate, Redirect, Navigate } from "react-router-dom";
import Characters from "./Characters";
import Dashboard from './Dashboard';
import Home from './Home'
import Registration from './auth/Registration';
import Login from './auth/Login'
import CharacterSheetParent from "./CharacterSheet/CharacterSheetParent";
import fetchUser from './fetchUser'

import axios from 'axios'
import NewCharacterParent from './CharacterForm/NewCharacterParent';

function App(){

  const[loggedInStatus, setLoggedInStatus] = useState(false)
  const[user, setUser] = useState({})

  const navigate = useNavigate();

  const logoutURL = 'http://localhost:3000/logout'

  const checkLogin=async()=>{
    const userData = await fetchUser();
    console.log(userData)
    setUser(userData)
    setLoggedInStatus(userData.logged_in)
    if (loggedInStatus == false){
      console.log('redirecting')
      navigate('/auth/login')
    }
  }

  function loggedIn(path, data){
    console.log(data)
    navigate(path, data)
    setLoggedInStatus(data.logged_in)
    setUser(data.user)
  }

  const loggedOut = async()=>{
    const response = await fetch(
      logoutURL,{
        method: 'DELETE',
        credentials: 'include',
        headers:{
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
      }
    )
    const data = await response.json()
    console.log(data)
    setLoggedInStatus(data.logged_in)
    setUser({})
    navigate('/auth/login', data)
  }

    return (
      <div className="App">
        <nav>
        {loggedInStatus?
          <>
            <h4>Logged In</h4>
            <Link to="/character">Characters</Link>
            <Link to="/newcharacter">New Character</Link>
            <Link to = '' onClick={()=>loggedOut()}>LogOut</Link>
          </>
        :
          <>
            <h4>Logged Out</h4>
            <Link to="/auth/registration">Sign Up</Link>
            <Link to="/auth/login">Sign In</Link>
          </>
        }
        </nav>
          <Routes>
              <Route exact path={'/'} element={<Home fetchUser={checkLogin} loggedInStatus={loggedInStatus}/>}/>
              <Route path="/auth/registration" element={<><Registration fetchUser={checkLogin} handleSuccessfulAuth={loggedIn} /></>}/>
              <Route path="/auth/login" element={<><Login fetchUser={checkLogin} handleSuccessfulAuth={loggedIn} /></>}/>
              <Route exact path={'/dashboard'} element={<Dashboard fetchUser={checkLogin} loggedInStatus={loggedInStatus} />}/>
              <Route path="/character" element={<><Characters fetchUser={checkLogin} /></>}/>
              <Route path="/newcharacter" element={<><NewCharacterParent fetchUser={checkLogin} /></>}/>
              <Route path="/charactersheet" element={<><CharacterSheetParent fetchUser={checkLogin} /></>}/>
              <Route path='/redirect' element={<Navigate to='/auth/login'/>}/>
          </Routes>
      </div>
    );
}
export default App;