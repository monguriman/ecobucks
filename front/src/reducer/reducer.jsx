import { LOGIN_SUCCESS, LOGOUT, UPDATE_USER } from './action'

export function loginReducer(userState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("%c로그인!", "color: #d93d1a;");
      return {
        ...userState,
        user: action.payload,
      };
    case LOGOUT:
      console.log("%c로그아웃!", "color: #d93d1a;");
      return {
        ...userState,
        user: null,
      };
    case UPDATE_USER:
      console.log("%c유저 정보 변동!", "color: #d93d1a;");
      return {
        ...userState,
        user: action.payload,
      };
    default:
      return userState;
  }
}
