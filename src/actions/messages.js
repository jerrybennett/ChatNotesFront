import MessagesApi from "../services/messagesApi"

export const ADD_MESSAGE = "ADD_MESSAGE"
export const FETCHED_MESSAGES = "FETCHED_MESSAGES"
export const FETCHING_MESSAGES = "FETCHING_MESSAGES"

export function addMessage(message){
  console.log("addMessage", message)
  return {
    type: "ADD_MESSAGE",
    payload: message
  }
}

// let messageID = 0
// export function addMessage(message, user) {
//   return {
//     type: ADD_MESSAGE,
//     messageID: messageID++,
//     payload: message, user, messageID
//   }
// }

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
