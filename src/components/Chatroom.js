import React, { Component } from 'react'
import AddMessage from './AddMessage'
import Messages from './Messages'
import { connect } from 'react-redux'
import { fetchChatrooms } from "../actions/messages";
import {Route, Switch, Redirect} from 'react-router-dom'

class ChatRoom extends React.Component {

  componentDidMount() {
    this.props.fetchChatrooms()
    // dispatch some action to fetch based on the id
  }

  // findById = (routerParams) => {
  //   return this.props.chatrooms.find(function(room){
  //     return room.id === parseInt(routerParams.match.params.id)
  //   })
  // }

  render () {
    let room = parseInt(this.props.match.params.id)
    console.log(this.props.match.params)
    console.log(this.props.chatrooms)
    console.log(this.props)
    // if i know the id you can fetch based on id


    // pass down the chat mesages to the messages component
    return (
      <div>
        {/* Rename Message */}
        <AddMessage  room={room}/>
        <Messages />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    chatrooms: state.chatrooms.chatrooms
  }
}

export default connect(mapStateToProps, {fetchChatrooms})(ChatRoom)
