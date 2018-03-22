let defaultState = {
  users: [],
  currentUser: null
}

function users(state = defaultState, action) {
  switch (action.type) {
    case "ADD_USER":
      console.log('hit me!')
      return {
        users: [ ...state.users, action.payload],
        currentUser: action.payload
      }
      break;
    // case "FETCHED_USER":
    //   return { ...state, messages: action.payload }
    default:
      return state
  }
}

export default users
