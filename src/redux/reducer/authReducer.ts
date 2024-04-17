import { LOGIN, LOGOUT } from "../action/actionTypes";

interface AuthState {
  isLogin: boolean;
}

interface AuthAction {
  type: typeof LOGIN | typeof LOGOUT;
}

const initialState: AuthState = {
  isLogin: true,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
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
