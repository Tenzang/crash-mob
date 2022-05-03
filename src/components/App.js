
import React, { Component, useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Redirect, Navigate } from "react-router-dom";
import CharacterIndexParent from "./CharacterIndex/CharacterIndexParent";
import Dashboard from './Dashboard';
import Home from './Home'
import Registration from './auth/Registration';
import Login from './auth/Login'
import CharacterSheetParent from "./CharacterSheet/CharacterSheetParent";
import fetchUser from './fetchUser'
import { AppBar, Typography, Toolbar , Tabs, Tab, Button, useMediaQuery, useTheme} from '@material-ui/core';
import NewCharacterParent from './CharacterForm/NewCharacterParent';
import CasinoIcon from '@material-ui/icons/Casino';
import DrawerComp from './DrawerComp'

function App(){

  const[loggedInStatus, setLoggedInStatus] = useState(false)
  const[user, setUser] = useState({})
  const [navValue, setNavValue] = useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navPages =["Home", "Character", "Products", "Products"]


  const navigate = useNavigate();

  const logoutURL = 'http://localhost:3000/logout'

  const checkLogin=async(path)=>{
    console.log(path)
    const userData = await fetchUser();
    console.log('userData from db', userData.logged_in)
    if (userData.logged_in == false){
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
      if (path =='/auth/login' || path == '/auth/registration'){
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
  const appbarStyle = {backgroundColor:'#D00000'}
  const tabStyle = {marginLeft: 'auto'}
  const loginStyle = {marginLeft: 'auto' }
  const signupStyle = {marginLeft: '10px' }
  const titleStyle = {fontSize:'1.5rem', paddingLeft: '10%'}
    return (
      <div className="App">
        <>
          <AppBar style={appbarStyle}>
            <Toolbar>
              <CasinoIcon/>
              {
                isMatch ? (
                  <>
                    <Typography style={titleStyle}>
                      CRASH MOB
                    </Typography>
                    <DrawerComp/>
                  </>
                ) : (
                  <>
                  <Tabs style={tabStyle} textColor="inherit" value={navValue} onChange={(event, value)=> setNavValue(value)} indicatorColor="secondary">
                    {
                      <>
                        <Tab element={<Link to="/newcharacter">New Character</Link>}/>
                        <Tab element={<Link to="/characters">Characters</Link>}/>
                      </>
                    }
                  </Tabs>
                  <Button style={loginStyle} variant="contained">Login</Button>
                  <Button style={signupStyle}variant="contained">Signup</Button>
                </>
                )
              }
            </Toolbar>
          </AppBar>
        </>
        <nav>
        {loggedInStatus==true?
          <>
            <h4>Logged In</h4>
            
            
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