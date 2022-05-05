import React, { useState } from 'react';
import { Routes, Route, useNavigate} from "react-router-dom";
import CharacterIndexParent from "./CharacterIndex/CharacterIndexParent";
import Home from './homePage/Home'
import Registration from './auth/Registration';
import Login from './auth/Login'
import CharacterSheetParent from "./CharacterSheet/CharacterSheetParent";
import fetchUser from './fetchUser'
import { AppBar, Typography, Toolbar , Tabs, Tab, Button, useMediaQuery, useTheme, useScrollTrigger, Slide} from '@material-ui/core';
import NewCharacterParent from './CharacterForm/NewCharacterParent';
import CasinoIcon from '@material-ui/icons/Casino';
import DrawerComp from './DrawerComp'
import './app.css'

const sourceURL = process.env.REACT_APP_SOURCE_URL;

function App(){

  const trigger =useScrollTrigger();
  const[loggedInStatus, setLoggedInStatus] = useState(false)
  const[user, setUser] = useState({})
  const [navValue, setNavValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navPages =[{name: "Home", path: '/'}, {name: "Characters", path: '/characters'}, {name:"New Character", path:'/newcharacter'}]
  const [characterId] = useState(null);


  const navigate = useNavigate();

  const logoutURL = sourceURL + 'logout';

  const checkLogin=async(path)=>{
    const userData = await fetchUser();
    if (userData.logged_in === false){
      if (path === '/auth/login' || path === '/auth/registration'){
        navigate(path) 
      }
      else{
        navigate('/')
      }
    }
    else{
      let index = navPages.findIndex(item => item.path === path)
      setNavValue(index)
      setUser(userData.user)
      setLoggedInStatus(userData.logged_in)
      if (path === '/auth/login' || path === '/auth/registration'){
        navigate('/')
      }
      
    }
  }

  function loggedIn(path, data){
    console.log(data)
    setLoggedInStatus(data.logged_in)
    setUser(data.user)
    navigate(path, data)
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


  const appbarStyle = {backgroundColor:'#456990'}
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
                      <Tabs style={tabStyle} textColor="inherit" value={navValue} onChange={(event, value)=> setNavValue(value)} indicatorColor="primary">
                        { 
                        navPages.map((page, index)=>(
                        <Tab value={index} key={index} label={page.name} onClick={()=>navigate(page.path)}/>
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
                      <Tabs style={tabStyle} textColor="inherit" value={0} onChange={(event, value)=> setNavValue(value)} indicatorColor="primary">
                        <Tab label={'Home'} onClick={()=>navigate('/')}/>
                      </Tabs>
                      <h6>{user.username}</h6>
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
              <Route path="/charactersheet/*"  element={<><CharacterSheetParent characterId={characterId} fetchUser={checkLogin} /></>}/>
          </Routes>
      </div>
    );
}
export default App;