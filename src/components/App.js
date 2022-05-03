
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import CharacterIndexParent from "./CharacterIndex/CharacterIndexParent";
import Dashboard from './Dashboard';
import Home from './Home'
import Registration from './auth/Registration';
import Login from './auth/Login'
import CharacterSheetParent from "./CharacterSheet/CharacterSheetParent";
import fetchUser from './fetchUser'

import NewCharacterParent from './CharacterForm/NewCharacterParent';

function App(){

  const[loggedInStatus, setLoggedInStatus] = useState(false)
  const[setUser] = useState({})

  const navigate = useNavigate();

  const logoutURL = 'http://localhost:3000/logout'

  const checkLogin=async(path)=>{
    console.log(path)
    const userData = await fetchUser();
    console.log('userData from db', userData.logged_in)
    if (userData.logged_in === false){
      console.log('is user data false?',userData.logged_in)
      console.log('redirecting')
      navigate('/auth/login')
    }
    else{
      console.log('is user data true?',userData.logged_in)
      setUser(userData.user)
      setLoggedInStatus(userData.logged_in)
      console.log('logged in status from db',userData.logged_in)
      console.log('state of login',loggedInStatus)
      if (path === '/auth/login' || path === '/auth/registration'){
        navigate('/')
      }
      else{
        navigate(path)
      }
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
    console.log('redirecting to login')
    navigate('/auth/login', data)
  }

    return (
      <div className="App">
        <nav>
        {loggedInStatus === true?
          <>
            <h4>Logged In</h4>
            <Link to="/characters">Characters</Link>
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
              <Route path="/characters" element={<><CharacterIndexParent fetchUser={checkLogin} /></>}/>
              <Route path="/newcharacter" element={<><NewCharacterParent fetchUser={checkLogin} /></>}/>
              <Route path="/charactersheet/*" element={<><CharacterSheetParent fetchUser={checkLogin} /></>}/>
          </Routes>
      </div>
    );
}
export default App;