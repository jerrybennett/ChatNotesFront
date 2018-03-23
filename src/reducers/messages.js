let defaultState = {
  messages: [],
  notes: []
}

function messages(state = defaultState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      // console.log('hit me!')
      return {
        messages: [...state.messages, action.payload]
      }
      break;

    case "FETCH_CHATROOM_MESSAGES":
      return { ...state, messages: action.payload.messages, notes: action.payload.notes}
      break;

    case "FETCHED_MESSAGES":
      return { ...state, messages: action.payload }
      break;

    default:
      return state
  }
}

export default messages
