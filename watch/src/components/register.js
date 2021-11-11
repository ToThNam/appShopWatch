import React, {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image,} from 'react-native';
import {useDispatch} from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { RegisterSchema } from '../helper/validSuport';
import { yupResolver } from '@hookform/resolvers/yup';
import { logUp } from '../reducers/authentication/action';
import styles from "../styles/registerStyle";

export default function Register({ navigation }) {
  const dispatch = useDispatch();
  const { register, setValue, getValues, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(RegisterSchema),
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
  const onSignUp = () => dispatch(logUp(
    getValues('Username'),
    getValues('ImgUrl'),
    getValues('Email'),
    getValues('Password'),
  ))
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
