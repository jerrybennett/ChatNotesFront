import { ADD_MESSAGE, FETCHED_MESSAGES, FETCHING_MESSAGES } from "../actions/messages";

const defaultState = {
  messages: [],
  isLoading: false,
  message: ''
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case FETCHING_MESSAGES:
      return { ...state, isLoading: true };
    case FETCHED_MESSAGES:
      return { ...state, isLoading: false, messages: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
