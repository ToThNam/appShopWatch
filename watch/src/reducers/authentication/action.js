import { ACTION_TYPES } from "./types";
import { instance } from '../../sevices/api';
export const logIn = (email, password) => async (dispatch) => instance.post('/user/login',
    {
      email: email,
      password: password,
    })
  .then(res => {
    if(res.data.status==="success"){
      dispatch({
        type: ACTION_TYPES.LOGIN_SUCCESS,  
        isLogin: true, 
        detail:  res.data
      })
    }
    else{
      alert(res.data.message)
    }
  })
export const logUp = (username, imgUser, email, password) => async (dispatch) => instance.post('/user/SignUp',
  {
    username: username,
    imgUser: imgUser,
    email: email,
    password: password,
  })
  .then(res => {
    if(res.data.status==="success"){
      dispatch({
        type: ACTION_TYPES.LOGIN_SUCCESS, 
        isLogin: true, 
        detail:  res.data
      })
    }
    else{
      alert(res.data.message)
    }
  })

export const logOut =()=> {
  return {
    type: ACTION_TYPES.USER_LOGOUT,
    isLogin: false,
  }
}
