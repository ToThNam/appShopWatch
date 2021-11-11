import React, {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image,} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { LoginSchema } from '../helper/validSuport';
import { yupResolver } from '@hookform/resolvers/yup';
import { logIn } from "../reducers/authentication/action";
import { useDispatch } from "react-redux";
import styles from "../styles/LoginStyle";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const { register, setValue, getValues, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      Email: 'namto@gmail.com',
      Password: '123456',
    },
  });
  useEffect(() => {
    register('Email');
    register('Password');
  }, [register]);
  const onLogin = () => dispatch(logIn(
    getValues("Email"), 
    getValues("Password")
  )) 
  return (
    <View style={styles.container}>
      <Image source={{uri : 'https://cdn3.dhht.vn/wp-content/uploads/2019/11/logo-full-mau.png'}} style={styles.Img} />
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
            style={styles.TextIPPassword}
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
          onPress={handleSubmit(onLogin)}
          style={styles.Signin}>
            <Text style={styles.txtLogin}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.Signin2}>
            <Text style={styles.txtLogin2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
