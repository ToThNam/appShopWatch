import axios from 'axios';
import {useDispatch} from 'react-redux';
const dispatch = useDispatch();

export const onLogin = () => {
  axios.post(
      'http://10.0.2.2:3000/user/login',
      {
        email: getValues("Email"),
        password: getValues("Password"),
      })
    .then(res => {
      if(res.data.status==="success"){
        dispatch({type: 'LOGIN_SUCCESS', payload: { isLogin: true, user: res.data}})
        dispatch({type: 'USER_DATA', detail:  res.data})
      }
      else{
        alert("Thông tin người dùng không chính xác")
      }
    })
};