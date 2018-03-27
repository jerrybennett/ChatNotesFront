let defaultState = {
  retrieved: false,
  messages: [],
  notes: [],
  userNotes: []
}

function messages(state = defaultState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      console.log('hit me!', action.payload)
      return {
        ...state, messages: [...state.messages, action.payload]
      }
      break;

    case "FETCH_CHATROOM_MESSAGES":
      return { ...state, messages: action.payload.messages, notes: action.payload.notes}
      break;

    case "CLEAR_MESSAGES":
      return defaultState

    case "ADD_NOTE":
      // console.log('hit me!')
      return {
        ...state, notes: [...state.notes, action.payload]
      }
      break;

    case "FETCH_NOTES":
      return { ...state, notes: action.payload, retrieved: true}
      break;

    case "CLEAR_MESSAGES":
      return {
        ...state, retrieved: false
      }

    case "DELETE_NOTE":
      return {
        ...state, notes: [...state.notes.slice(0, action.payload)],
       ...state, notes: [...state.notes.slice(action.payload+ 1)]
      }
    // case "FETCHED_MESSAGES":
    //   return { ...state, messages: action.payload }
    //   break;

    default:
      return state
  }
}

export default messages
