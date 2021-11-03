const initState = {
    token: '',
    userdata:[],
    isLogin:false,
  
  };
  export default function authReducer(state = initState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLogin: action.payload.isLogin
            };
        case "USER_DATA":
            return {
                ...state,
                userdata: [...state.userdata, { ...action.detail }]
            };
        case "USER_LOGOUT":
            return{
                ...state,
                isLogin: action.payload.isLogin,
                userdata: []
            }
        default:
            return state;
    }
  }