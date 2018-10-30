import React, { Component } from 'react'
import { withRouter } from "react-router";
import Header from './common/Header'
import { connect } from 'react-redux'
class App extends Component {
  render() {   
    return (
      <div>
          <Header/>
          <div className="container"  style={{paddingTop:'80px'}}>
                {this.props.children}
          </div> 
      </div>
    )
  }
}
export default withRouter(connect(null, null)(App));

