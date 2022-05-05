import React, { useState } from 'react'
import { Drawer, List, IconButton, ListItemText, ListItem, ListItemIcon} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useNavigate } from "react-router-dom";

const DrawerComp = (props) => {
    const navigate = useNavigate();
    const [drawerState, setDrawerState] = useState(false)
    const iconButtonStyle = {color:'white', marginLeft:'auto'}
    const navPagesLoggedIn =[{name: "Home", path: '/'},{name: "Characters", path: '/characters'}, {name:"New Character", path:'/newcharacter'}]
    const navPagesLoggedOut =[{name: "Home", path: '/'},{name: "Login", path: '/auth/login'}, {name:"Sign Up", path:'/auth/registration'}]

  return (
    <>
        <Drawer open={drawerState} onClose={()=>setDrawerState(false)}>
            <List>
                {props.loginState?(
                    navPagesLoggedIn.map((page, index)=>(
                        <>
                            <ListItem onClick={ () => { setDrawerState(false); navigate(page.path) } } button key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page.name}</ListItemText>
                                </ListItemIcon>
                            </ListItem>
                        </> 
                    ))
                ):(
                    navPagesLoggedOut.map((page, index)=>(
                        <>
                            <ListItem onClick={ () => { setDrawerState(false); navigate(page.path) } } button key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page.name}</ListItemText>
                                </ListItemIcon>
                            </ListItem>
                        </> 
                    ))
                )
                }
            </List>
        </Drawer>
        <IconButton style={iconButtonStyle} onClick={()=> setDrawerState(!drawerState)}>
        <MenuIcon></MenuIcon>
        </IconButton>
    </>
  )
}

export default DrawerComp