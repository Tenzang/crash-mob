import React, { Component } from 'react'

export default class Dashboard extends Component {
      componentDidMount(){
        this.props.fetchUser();
    }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
      </div>
    )
  }
}


