let defaultState = {
  chatrooms: []
}

function chatrooms(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CHATROOM":
    console.log('hit me!')
      return {
        chatrooms: [ ...state.chatrooms, action.payload ]
      }
      break;

    case "FETCH_CHATROOMS":
      return { ...state, chatrooms: action.payload }
      break;

    default:
      return state
  }
}

export default chatrooms
