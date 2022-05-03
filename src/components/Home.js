import React, { Component } from 'react'

class Home extends Component {
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

export default Home;
