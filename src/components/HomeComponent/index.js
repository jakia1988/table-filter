import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadData} from '../../actions/getData_action'
import { withRouter } from "react-router";
import { Welcome} from "./Welcome";
import { Member} from "./Member";
class Home extends Component {
  constructor(props){
    super(props);
    this.props.defaultData();
    this.state = {
      isLoaded: false
    } 
  }
 
  render() {   
    return (
      <div>    
        {
          this.props.appLoaded && <Member info={this.props.data[0].accessContracts}/>    
        }
        {
          this.props.appLoaded && <Welcome name={this.props.data[0].authUser}/>    
        }
        <div className="row Widget">

        </div>           
       </div>
    )
  }
}

function mapStatetoProps(state){
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    defaultData: bindActionCreators(loadData, dispatch)   
  };
}

export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(Home));