import React, { Component, useState } from 'react'
import { Drawer, List, IconButton, ListItemText, ListItem, ListItemIcon} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const DrawerComp = () => {
    const [drawerState, setDrawerState] = useState(false)
    const iconButtonStyle = {color:'white', marginLeft:'auto'}
    const navPages =["Products", "Products", "Products", "Products"]
  return (
    <>
        <Drawer open={drawerState} onClose={()=>setDrawerState(false)}>
            <List>
                {
                    navPages.map((page, index)=>(
                        <>
                            <ListItem onClick={()=>setDrawerState(false)} button key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItem>
                        </> 
                    ))
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