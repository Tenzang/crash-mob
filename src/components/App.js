import React, { useState } from 'react';
import { Routes, Route, useNavigate} from "react-router-dom";
import CharacterIndexParent from "./CharacterIndex/CharacterIndexParent";
import Home from './Home'
import Registration from './auth/Registration';
import Login from './auth/Login'
import CharacterSheetParent from "./CharacterSheet/CharacterSheetParent";
import fetchUser from './fetchUser'
import { AppBar, Typography, Toolbar , Tabs, Tab, Button, useMediaQuery, useTheme, useScrollTrigger, Slide} from '@material-ui/core';
import NewCharacterParent from './CharacterForm/NewCharacterParent';
import CasinoIcon from '@material-ui/icons/Casino';
import DrawerComp from './DrawerComp'
import { mergeClasses } from '@material-ui/styles';
import { CallMissedSharp } from '@material-ui/icons';




function App(){

  const trigger =useScrollTrigger();
  const[loggedInStatus, setLoggedInStatus] = useState(false)
  const[user, setUser] = useState({})
  const [navValue, setNavValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navPages =[{name: "Home", path: '/'},{name: "Characters", path: '/characters'}, {name:"New Character", path:'/newcharacter'}]


  const navigate = useNavigate();

  const logoutURL = 'http://localhost:3000/logout'

  const checkLogin=async(path)=>{
    const userData = await fetchUser();
    if (userData.logged_in === false){
      if (path == '/auth/login' || path == '/auth/registration'){
        navigate(path) 
      }
      else{
        navigate('/')
      }
    }
    else{
      setUser(userData.user)
      setLoggedInStatus(userData.logged_in)
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
  const appbarStyle = {backgroundColor:'#D00000'}
  const tabStyle = {marginLeft: 'auto'}
  const loginStyle = {marginLeft: 'auto' }
  const signupStyle = {marginLeft: '10px' }
  const titleStyle = {fontSize:'1.5rem', paddingLeft: '10%'}
    return (
      <div className="App">
        <>
        <Slide appear={false} direction = "down" in={!trigger}>
            <AppBar style={appbarStyle} >
              <Toolbar>
                <CasinoIcon/>
                {
                  isMatch ? (
                    <>
                      <Typography style={titleStyle}>
                        CRASH MOB
                      </Typography>
                      <DrawerComp loginState={loggedInStatus}/>
                    </>
                  ) : ( loggedInStatus ? (
                    <>
                      <Typography style={titleStyle}>
                        CRASH MOB
                      </Typography>
                      <Tabs style={tabStyle} textColor="inherit" value={navValue} onChange={(event, value)=> setNavValue(value)} indicatorColor="secondary">
                        { 
                        navPages.map((page, index)=>(
                        <Tab key={index} label={page.name} onClick={()=>navigate(page.path)}/>
                      ))
                        }
                      </Tabs>
                      <Button style={loginStyle} variant="contained" onClick={()=>loggedOut()}>LogOut</Button>
                    </>
                  ) : (
                    <>
                      <Typography style={titleStyle}>
                        CRASH MOB
                      </Typography>
                      <Tabs style={tabStyle} textColor="inherit" value={0} onChange={(event, value)=> setNavValue(value)} indicatorColor="secondary">
                        <Tab label={'Home'} onClick={()=>navigate('/')}/>
                      </Tabs>
                      <Button style={loginStyle} onClick={()=>navigate('/auth/login')} variant="contained">LogIn</Button>
                      <Button style={signupStyle} onClick={()=>navigate('/auth/registration')} variant="contained">Sign-Up</Button>
                    </>
                    )
                  )
                }
              </Toolbar>
            </AppBar>
          </Slide>
        </>
          <Routes>
              <Route exact path={'/'} element={<Home fetchUser={checkLogin} loggedInStatus={loggedInStatus}/>}/>
              <Route path="/auth/registration" element={<><Registration fetchUser={checkLogin} handleSuccessfulAuth={loggedIn} /></>}/>
              <Route path="/auth/login" element={<><Login fetchUser={checkLogin} handleSuccessfulAuth={loggedIn} /></>}/>
              <Route path="/characters" element={<><CharacterIndexParent fetchUser={checkLogin} /></>}/>
              <Route path="/newcharacter" element={<><NewCharacterParent fetchUser={checkLogin} /></>}/>
              <Route path="/charactersheet/*" element={<><CharacterSheetParent fetchUser={checkLogin} /></>}/>
          </Routes>
      </div>
    );
}
export default App;