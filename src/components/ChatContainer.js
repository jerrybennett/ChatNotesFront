import React, { Component } from 'react'
import AddMessage from './AddMessage'
import Messages from './Messages'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

class ChatContainer extends React.Component {

  render () {

    return (
      <div>
        <div className="container" >
          <Messages roomID={ this.props.roomID } />
        </div>
        <footer>
          <AddMessage  roomID={ this.props.roomID } />
        </footer>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    currentUser: state.users.currentUser,
  }
}

export default connect(mapStateToProps, null)(ChatContainer);
