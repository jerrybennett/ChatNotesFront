import MessagesApi from "../services/messagesApi"

export function addMessage(message){
  return function(dispatch){
    MessagesApi.addMessage(message)
    .then(response => {
      dispatch({
        type: "ADD_MESSAGE",
        payload: response
      })
    })
  }
}

export function fetchMessages() {
  return function(dispatch) {
    MessagesApi.fetchMessages()
    .then(messages => {
      dispatch({
        type: "FETCHED_MESSAGES",
        payload: messages
      })
    })
  }
}

export function addUser(user){
  return function(dispatch){
    MessagesApi.addUser(user)
    .then(response => {
      dispatch({
        type: "ADD_USER",
        payload: response
      })
    })
  }
}

export function logInUser(user){
  return function(dispatch){
    MessagesApi.logInUser(user)
    .then(response => {
      dispatch({
        type: "LOGIN_USER",
        payload: response
      })
    })
  }
}

export function fetchChatrooms() {
  return function(dispatch) {
    MessagesApi.fetchChatrooms()
    .then(chat_rooms => {
      dispatch({
        type: "FETCH_CHATROOMS",
        payload: chat_rooms
      })
    })
  }
}



// sendMesssage = (event) => {
//   fetch(`http://localhost:3000/chatrooms/${this.props.chatroom.id}/add_message`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//       content: this.state.content,
//       user_id: 1
//     })
//   })
//   .then(res => {
//     this.setState({
//       content: "",
//     })
//   })
// }
//
// handleChange = (event) => {
//   this.setState({
//     content: event.target.value
//   })
// }
//
// export function fetchMessages() {
//   return function(dispatch) {
//     dispatch({ type: "FETCHING_MESSAGES" });
//     MessagesApi.fetchMessages(1).then(messages => {
//       dispatch({
//         type: "FETCHED_MESSAGES",
//         payload: 1
//       })
//     })
//   }
// }
//
// export function handleChange(e) {
//     this.setState({
//       message: e.target.value
//     })
//   }
