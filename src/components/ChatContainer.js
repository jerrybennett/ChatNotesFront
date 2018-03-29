import React, { Component } from 'react'
import AddMessage from './AddMessage'
import Messages from './Messages'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

class ChatContainer extends React.Component {

  roomName = () => {
    let rm = this.props.chatrooms.find(c => c.id === this.props.roomID)
    return <h3>{rm.name}</h3>
    }


  // (4) [{…}, {…}, {…}, {…}]0: id: 1messages: (5) [{…}, {…}, {…}, {…}, {…}]name: "Sports"notes: (3) [{…}, {…}, {…}]users: [{…}]__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()1: {id: 2, name: "Music", users: Array(1), messages: Array(0), notes: Array(4)}2: {id: 3, name: "Science", users: Array(1), messages: Array(0), notes: Array(0)}3: {id: 4, name: "The Office", users: Array(1), messages: Array(0), notes: Array(0)}length: 4__proto__: Array(0)
  //

  render () {

    console.log(this.props)
    return (
      <div>
        <div className="container" >
          {this.roomName()}
          <Messages roomID={ this.props.roomID } />
        </div>
        <footer>
          <AddMessage roomID={ this.props.roomID } />
        </footer>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    chatrooms: state.chatrooms.chatrooms,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, null)(ChatContainer);
