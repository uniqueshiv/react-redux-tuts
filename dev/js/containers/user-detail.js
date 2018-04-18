import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
      if(!this.props.users){
        return (<h4>Select a user</h4>)
      }
      return(
        <div>
        <img src={this.props.users.thumbnail} />
        <h2>{this.props.users.first} {this.props.users.last} </h2>
        <h3>{this.props.users.age}</h3>
        <h4>{this.props.users.description}</h4>
        </div>
      )
    }
}

function mapStateToProps(state){
  return {
    users: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);
