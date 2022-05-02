import React, { Component } from 'react'
import Registration from './auth/Registration'

export default class Home extends Component {
  constructor(props){
    super();
  }

    componentDidMount(){
      this.props.fetchUser('/');
  }
  
  render() {
    return (
      <div>
          <h1>Home</h1>
      </div>
    )
  }
}
