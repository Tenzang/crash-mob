
import React, { Component } from 'react';
import { render } from "@testing-library/react";
import { Routes, Route, Link } from "react-router-dom";
import Characters from "./Characters";
import SignIn from "./SignIn";
import NewCharacter from "./NewCharacter";
import Dashboard from './Dashboard';
import Home from './Home'
import Registration from './auth/Registration';
import CharacterSheetParent from "./CharacterSheet/CharacterSheetParent";

export default class App extends Component{
  constructor(){
    //overide state
    super();
    this.state={
        loggedInStatus: "NOT_LOGGED_IN",
        //eventually we will populate this from data in the api
        user: {}
    }
}
  render(){
    
    return (
      <div className="App">
        <nav>
        <Link to="/signin">Sign In</Link>
        <Link to="/auth/registration">Sign Up</Link>
        <Link to="/character">Characters</Link>
        <Link to="/newcharacter">New Character</Link>
        
        </nav>
          <Routes>
            <Route exact path={'/'} element={<Home loggedInStatus={this.state.loggedInStatus}/>}/>
            <Route exact path={'/dashboard'} element={<Dashboard loggedInStatus={this.state.loggedInStatus} />}/>
            <Route path="/signin" element={<><SignIn /></>}/>
            <Route path="/auth/registration" element={<><Registration/></>}/>
            <Route path="/character" element={<><Characters /></>}/>
            <Route path="/newcharacter" element={<><NewCharacter /></>}/>
            <Route path="/charactersheet" element={<><CharacterSheetParent /></>}/>
          </Routes>
      </div>
    );
  }
}