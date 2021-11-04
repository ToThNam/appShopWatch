const initState = {
    userdata:[],
    isLogin:false,
  
  };
  export default function authReducer(state = initState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLogin: action.payload.isLogin,
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