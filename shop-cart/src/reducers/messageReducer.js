import { CHANGE_MESSAGE } from "../constants/ActionTypes";
import { MSG_WELCOME } from "../constants/Message";

const initialState = MSG_WELCOME;

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE: {
      return action.message;
    }
    default:
      return state;
  }
};
export default messageReducer;
