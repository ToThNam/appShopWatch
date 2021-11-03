import axios from 'axios';
import React, {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image,} from 'react-native';
import {useDispatch} from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from "../styles/registerStyle";

export default function Register({ navigation }) {
  const dispatch = useDispatch();
  const LoginSchema = yup.object().shape({
    Username: yup
      .string()
      .required("*Username is required field, please enter your name")
      .max(20, "*Username should be 5-20 characters in length!")
      .min(5, "*Username should be 5-20 characters in length!"),
    ImgUrl: yup
      .string(),
    Email: yup
      .string()
      .required("*Email is required field, please enter email address")
      .email("*Invalid Email format, please enter a valid email address"),
    Password: yup
      .string()
      .required("*Password is required field, please enter password")
      .min(6, "*Password at least 6 characters in length!"),
  })
  const { register, setValue, getValues, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      Username: '',
      ImgUrl: '',
      Email: '',
      Password: '',
    },
  });
  useEffect(() => {
    register('Username');
    register('ImgUrl');
    register('Email');
    register('Password');
  }, [register]);
  const onSignUp = () => {
    axios.post(
        'http://10.0.2.2:3000/user/SignUp',
        {
          username: getValues("Username"),
          imgUser: getValues("ImgUrl"),
          email: getValues("Email"),
          password: getValues("Password"),
        })
      .then(res => {
        if(res.data.status==="success"){
          dispatch({type: 'LOGIN_SUCCESS', payload: { isLogin: true, user: res.data}})
          dispatch({type: 'USER_DATA', detail:  res.data})
        }
        else{
          alert(res.data.message)
        }
      })
  };
  return (
    <View style={styles.container}>
      <Image source={{uri : 'https://cdn3.dhht.vn/wp-content/uploads/2019/11/logo-full-mau.png'}} 
      style={styles.Img} />
      <Controller
        control={control}
        name="Username"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(val) => {
              onChange(val);
              setValue('Username', val);
            }}
            value={value}
            placeholder="Your name"
            style={styles.TextIP}
            placeholderTextColor={'grey'}
          />
        )}
      />
       <View style={styles.errView}>
        {errors.Username && (
          <Text style={styles.errInput}>{errors.Username.message}</Text>
        )}
      </View>
      <Controller
        control={control}
        name="ImgUrl"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(val) => {
              onChange(val);
              setValue('ImgUrl', val);
            }}
            value={value}
            placeholder="Image URL"
            style={styles.TextIP}
            placeholderTextColor={'grey'}
          />
        )}
      />
       <View style={styles.errView}>
        {errors.ImgUrl && (
          <Text style={styles.errInput}>{errors.ImgUrl.message}</Text>
        )}
      </View>
      <Controller
        control={control}
        name="Email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(val) => {
              onChange(val);
              setValue('Email', val);
            }}
            value={value}
            placeholder="Email"
            style={styles.TextIP}
            placeholderTextColor={'grey'}
          />
        )}
      />
      <View style={styles.errView}>
        {errors.Email && (
          <Text style={styles.errInput}>{errors.Email.message}</Text>
        )}
      </View>
      <Controller
        control={control}
        name="Password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(val) => {
              onChange(val);
              setValue('Password', val);
            }}
            value={value}
            style={styles.TextIP}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={'grey'}
          />
        )}
      />
      <View style={styles.errView}>
        {errors.Password && (
          <Text style={styles.errInput}>{errors.Password.message}</Text>
        )}
      </View>
      <View style={styles.groupButton}>
        <TouchableOpacity
          onPress={handleSubmit(onSignUp)}
          style={styles.Signin}>
            <Text style={styles.txtLogin}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.Signin2}>
            <Text style={styles.txtLogin2}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
