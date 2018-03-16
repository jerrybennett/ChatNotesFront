import MessagesApi from "../services/messagesApi"

export const ADD_MESSAGE = "ADD_MESSAGE"
export const FETCHED_MESSAGES = "FETCHED_MESSAGES"
export const FETCHING_MESSAGES = "FETCHING_MESSAGES"


export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message
  }
}

export function fetchMessages() {
  return function(dispatch) {
    dispatch({ type: "FETCHING_MESSAGES" });
    MessagesApi.fetchMessages(1).then(messages => {
      dispatch({
        type: "FETCHED_MESSAGES",
        payload: 1
      })
    })
  }
}

export function handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }
