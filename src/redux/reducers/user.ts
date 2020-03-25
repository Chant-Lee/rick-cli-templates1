export const SAVE_USER = "SAVE_USER";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

const defaultState = {
  userInfo: {},
  loginStatus: "login"
};

export default function userReducer(state: any = defaultState, action: any) {
  switch (action.type) {
    case SAVE_USER:
      const {
        payload: { data }
      } = action;
      return {
        ...defaultState,
        userInfo: data,
        loginStatus: "login"
      };

    case LOGOUT_SUCCESS:
      return {
        ...defaultState,
        loginStatus: "logout"
      };
    default:
      return state;
  }
}
