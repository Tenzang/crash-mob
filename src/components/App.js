
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

  const[loggedInStatus, setLoggedInStatus] = useState(false)
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
    setLoggedInStatus(data.logged_in)///FIX THIS BUG
  };
  
  // useEffect(()=>{
  //   setTimeout(()=>fetchUser(), 3000)
  // })


  function loggedIn(path, data){
    console.log(data)
    navigate(path, data)
    setLoggedInStatus(data.logged_in)
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
            <Route exact path={'/'} element={<Home fetchUser={fetchUser} loggedInStatus={loggedInStatus}/>}/>
            <Route exact path={'/dashboard'} element={<Dashboard fetchUser={fetchUser} loggedInStatus={loggedInStatus} />}/>
            <Route path="/auth/registration" element={<><Registration fetchUser={fetchUser} handleSuccessfulAuth={loggedIn} /></>}/>
            <Route path="/auth/login" element={<><Login navRegistration={loggedOut} fetchUser={fetchUser} handleSuccessfulAuth={loggedIn} /></>}/>
            <Route path="/character" element={<><Characters fetchUser={fetchUser} /></>}/>
            <Route path="/newcharacter" element={<><NewCharacter fetchUser={fetchUser} /></>}/>
            <Route path="/charactersheet" element={<><CharacterSheetParent fetchUser={fetchUser} /></>}/>
          </Routes>
      </div>
    );
}
export default App;