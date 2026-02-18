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

const authReducer = (
  state: AuthState | undefined,
  action: AuthAction,
): AuthState => {
  const currentState = state ?? initialState;

  switch (action.type) {
    case LOGIN:
      return {
        ...currentState,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...currentState,
        isLogin: false,
      };
    default:
      return currentState;
  }
};

export default authReducer;
