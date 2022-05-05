import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Home from './Home'

export default class navigation extends Component {
    constructor(){
        //overide state
        super();
        this.state={
            loggedInStatus: "NOT_LOGGED_IN",
            //eventually we will populate this from data in the api
            user: {}
        }
    }
    componentDidMount(){
      this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path={'/'} element={<Home loggedInStatus={this.state.loggedInStatus}/>}/>
            <Route exact path={'/dashboard'} element={<Dashboard loggedInStatus={this.state.loggedInStatus} />}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
