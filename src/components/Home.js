import React, { Component } from 'react'
import Registration from './auth/Registration'

export default class Home extends Component {
  constructor(props){
    super(props);
  }

    componentDidMount(){
      this.props.fetchUser();
  }
  
  render() {
    return (
      <div>
          <h1>Home</h1>
          <h2>Status:{this.props.loggedInStatus}</h2>
      </div>
    )
  }
}
