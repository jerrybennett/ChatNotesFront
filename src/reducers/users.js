let defaultState = {
  users: [],
  currentUser: {}
}

function users(state = defaultState, action) {
  switch (action.type) {
    case "ADD_USER":
      // console.log('hit me!')
      localStorage.setItem("user_id", action.payload.id)
      return {
        // users: [ ...state.users, action.payload],
        currentUser: action.payload
      }
      break;

    case "FETCH_CHATROOM_USERS":
      return { ...state, users: action.payload }
      break;

    case "SET_CURRENT_USER":
      return {
        currentUser: action.payload
      }
      break;

    default:
      return state
  }
}

export default users
