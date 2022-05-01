
import React, { Component, useState, useEffect } from 'react';
import { render } from "@testing-library/react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Characters from "./Characters";
import NewCharacter from "./NewCharacter";
import Dashboard from './Dashboard';
import Home from './Home'
import Registration from './auth/Registration';
import Login from './auth/Login'
import CharacterSheetParent from "./CharacterSheet/CharacterSheetParent";
import axios from 'axios'

function App(){

  const[loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const[user, setUser] = useState({})

  const navigate = useNavigate();

  const fetchUser = async ()=>{
    const response = await fetch(
      'http://localhost:3000/logged_in',{
        method: 'GET',
        credentials: 'include',
        headers:{
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
      }
    )
    const data = await response.json()
    console.log(data)
    setUser(data)
    //GET RID OF THIS
    setLoggedInStatus("LOGGED_IN")///FIX THIS BUG
  };
  
  // useEffect(()=>{
  //   setTimeout(()=>fetchUser(), 3000)
  // })


  function loggedIn(path, data){
    navigate(path, data)
    setLoggedInStatus("LOGGED_IN")
    setUser(data.user)
  }

  const loggedOut = async()=>{
    const response = await fetch(
      'http://localhost:3000/logout',{
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
    setLoggedInStatus("NOT_LOGGED_IN")
    setUser({})
  }

    return (
      <div className="App">
        <nav>
        <Link to="/auth/registration">Sign Up</Link>
        <Link to="/auth/login">Sign In</Link>
        <Link to="/character">Characters</Link>
        <Link to="/newcharacter">New Character</Link>
        <button onClick={()=>loggedOut()}>LogOut</button>
        
        </nav>
          <Routes>
            <Route exact path={'/'} element={<Home fetchUser={fetchUser} loggedInStatus={loggedInStatus}/>}/>
            <Route exact path={'/dashboard'} element={<Dashboard fetchUser={fetchUser} loggedInStatus={loggedInStatus} />}/>
            <Route path="/auth/registration" element={<><Registration fetchUser={fetchUser} handleSuccessfulAuth={loggedIn} /></>}/>
            <Route path="/auth/login" element={<><Login fetchUser={fetchUser} handleSuccessfulAuth={loggedIn} /></>}/>
            <Route path="/character" element={<><Characters fetchUser={fetchUser} /></>}/>
            <Route path="/newcharacter" element={<><NewCharacter fetchUser={fetchUser} /></>}/>
            <Route path="/charactersheet" element={<><CharacterSheetParent fetchUser={fetchUser} /></>}/>
          </Routes>
      </div>
    );
}
export default App;