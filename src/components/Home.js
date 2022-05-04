import React, { Component } from 'react'

class Home extends Component {
  componentDidMount(){
    this.props.fetchUser('/');
  }
  
  render() {
    return (
      <div class="container">
          <h1>Home feed coming soon</h1>
      </div>
    )
  }
}

export default Home;
