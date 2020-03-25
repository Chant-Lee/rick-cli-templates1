import {
  HomeState,
  INITIAL_STATE,
  Action,
  RECEIVE_HOME,
  RECEIVE_HOME_ERROR
} from "../constants/home";
export default function reducer(
  state: HomeState = INITIAL_STATE,
  action: Action
) {
  switch (action.type) {
    case RECEIVE_HOME: {
      return {
        ...state,
        list: action.list
      };
    }
    case RECEIVE_HOME_ERROR: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
