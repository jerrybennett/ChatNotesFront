import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getChatRoomMessages } from "../actions/messages";

class Messages extends Component {

  // componentWillReceiveProps(nextProps){
  //
  // }

  fetchMessages(props){
    if (props.currentUser.id){
      props.getChatRoomMessages(props.roomID, props.currentUser.id)
    }
  }
  componentDidMount(){
    this.interval = setInterval(() => {
      this.fetchMessages(this.props)
      // this.scrollToBottom();
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
    console.log(this.el)
  }


  render() {
    console.log(this.props)
    return (
      <div className="chatList">
        {this.props.messages.map(m => {
          let timeStamp = new Date(m.created_at)
          if(m.user.id === this.props.currentUser.id) {
            return (
                <div key={m.id} className="userMessage">
                  <p className="text-right" >{m.text}</p>
                  <div className="text-left">
                    <span>{m.user.username} {`//`} {`${timeStamp.getHours()}:${timeStamp.getMinutes() > 9 ? timeStamp.getMinutes() : `0${timeStamp.getMinutes()}`}`}</span>
                  </div>
                <div ref={el => { this.el = el; }}></div>
              </div>
          )
          } else {
            return (
                <div key={m.id} className="userMessage darker">
                  <p className="text-left" >{m.text}</p>
                  <div className="text-right">
                    <span>{m.user.username} {`//`} {`${timeStamp.getHours()}:${timeStamp.getMinutes() > 9 ? timeStamp.getMinutes() : `0${timeStamp.getMinutes()}`}`}</span>
                  </div>
                  <div ref={el => { this.el = el; }} />
                </div>
            )
          }
        }
      )
    }
      <div ref={el => { this.el = el; }} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    messages: state.messages.messages,
    currentUser: state.users.currentUser,
  }
}

export default connect(mapStateToProps, { getChatRoomMessages })(Messages)
