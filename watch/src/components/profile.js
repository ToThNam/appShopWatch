import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles/userStyle';

export default function profile({navigation}) {
  const dataUser = useSelector(store => store.authReducer.userdata);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
    <View style={{marginBottom:10}}>
      <Image
        source={{uri: 'https://img4.goodfon.com/wallpaper/nbig/9/3b/novyi-god-chasy-polnoch-dozhdik-prazdnik-new-year-watch-holi.jpg',}}
        style={styles.background}
      />
      <Image
        source={{
          uri: dataUser[0]?.data.imgUser
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{dataUser[0]?.data.username}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('WishList')}>
        <Text style={styles.list}>Danh sách yêu thích</Text>
      </TouchableOpacity>
      <View >
        <Text style={styles.list}>{dataUser[0]?.data.email}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.list}>Go Back</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}
