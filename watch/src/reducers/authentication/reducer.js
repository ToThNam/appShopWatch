import { ACTION_TYPES } from "./types";
const initState = {
  userdata:[],
  isLogin:false,
};
export default function authReducer(state = initState, action) {
  switch (action.type) {
      case ACTION_TYPES.LOGIN_SUCCESS:
          return {
              ...state,
              isLogin: action.isLogin,
              userdata: [...state.userdata, { ...action.detail }]
          }; 
      case ACTION_TYPES.USER_LOGOUT:
          return{
              ...state,
              isLogin: action.isLogin,
              userdata: []
          }
      default:
          return state;
  }
}