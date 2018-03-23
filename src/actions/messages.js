import MessagesApi from "../services/messagesApi"

export function addMessage(message, room, userID){
  return function(dispatch){
    MessagesApi.addMessage(message, room, userID)
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

export function getChatRoomMessages(id) {
  return function(dispatch) {
    MessagesApi.getChatRoomMessages(id)
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

export function deleteChatRoom(id) {
  return function(dispatch) {
    MessagesApi.deleteChatRoom(id)
    .then(response => {
      dispatch({
        type: "DELETE_CHATROOM",
        payload: response
      })
    })
  }
}
