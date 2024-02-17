import { LOGIN, LOGOUT } from "../action/actionTypes";

const initalState = {
  isLogin: false,
};

interface authActionType {
  type: "LOGIN" | "LOGOUT";
}

const authReducer = (state = initalState, action: authActionType) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
