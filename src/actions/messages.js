import MessagesApi from "../services/messagesApi"

export function addMessage(message, room, userID){
  return function(dispatch){
    MessagesApi.addMessage(message, room, userID)
    .then(response => {
      console.log(response)
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

export function addNote(title, text, room, userID){
  return function(dispatch){
    MessagesApi.addNote(title, text, room, userID)
    .then(response => {
      dispatch({
        type: "ADD_NOTE",
        payload: response
      })
    })
  }
}

export function fetchNotes(id) {
  return function(dispatch) {
    MessagesApi.fetchNotes(id)
    .then(response => {
      dispatch({
        type: "FETCH_NOTES",
        payload: response
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
    .then(response => {
      dispatch({
        type: "FETCH_CHATROOMS",
        payload: response
      })
    })
  }
}

export function addChatRoom(name){
  return function(dispatch){
    MessagesApi.addChatRoom(name)
    .then(response => {
      dispatch({
        type: "ADD_CHATROOM",
        payload: response
      })
    })
  }
}

export function getChatRoomMessages(id, userID) {
  return function(dispatch) {
    MessagesApi.getChatRoomMessages(id, userID)
    .then(response => {
      dispatch({
        type: "FETCH_CHATROOM_MESSAGES",
        payload: response
      })
    })
  }
}

export function getChatRoomUsers(id) {
  return function(dispatch) {
    MessagesApi.getChatRoomUsers(id)
    .then(response => {
      dispatch({
        type: "FETCH_CHATROOM_USERS",
        payload: response
      })
    })
  }
}

export function clearMessages(){
  return {type: "CLEAR_MESSAGES"}
}

export function getCurrentUser(id) {
  return function(dispatch) {
    MessagesApi.getCurrentUser(id)
    .then(response => {
      dispatch({
        type: "SET_CURRENT_USER",
        payload: response
      })
    })
  }
}

export function updateNote(id, note) {
  return function(dispatch) {
    MessagesApi.updateNote(id, note)
    .then(response => {
      dispatch({
        type: "SET_CURRENT_USER",
        payload: response
      })
    })
  }
}

export function deleteNote(id) {
  return function(dispatch) {
    MessagesApi.deleteNote(id)
    .then(response => {
      dispatch({
        type: "DELETE_NOTE",
        payload: id
      })
    })
  }
}

// export function getChatRoomNotes(id, userID) {
//   return function(dispatch) {
//     MessagesApi.getChatRoomNotes(id, userID)
//     .then(response => {
//       dispatch({
//         type: "FETCH_CHATROOM_NOTES",
//         payload: response
//       })
//     })
//   }
// }
