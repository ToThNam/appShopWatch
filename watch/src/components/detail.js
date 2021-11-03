import React, { useState } from 'react'
import { View, Text, Image, FlatList, StatusBar, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/detailStyle';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
import Swiper from 'react-native-swiper'


const detail = ({ route }) => {
  const navigation = useNavigation();
  const { detail } = route.params;
  const dispatch = useDispatch();
  const onAddCart = () => {
    dispatch({ type: 'ADD_CART', detail: detail })
  }
  const onAddList = () => {
    dispatch({ type: 'ADD_LIST', detail: detail })
  }
  const [heart, setHeart] = useState(false);
  const addFavorite = () => {
    onAddList(); 
    setHeart(!heart);
  };
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name={'arrow-back-outline'} size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>Detail</Text>
      </View>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Swiper style={styles.wrap} showsButtons loop={true} showsButtons={false} autoplay={true}	>
          <View testID="Hello" style={styles.slide}>
            <Image
              source={{ uri: detail.ImageProduct }}
              style={styles.ImgDetail}
            />
          </View>
          <View testID="Hello" style={styles.slide}>
            <Image
              source={{ uri: detail.ImageProduct1 }}
              style={styles.ImgDetail}
            />
          </View>
          <View testID="Beautiful" style={styles.slide}>
            <Image
              source={{ uri: detail.ImageProduct2 }}
              style={styles.ImgDetail}
            />
          </View>
          <View testID="Simple" style={styles.slide}>
            <Image
              source={{ uri: detail.ImageProduct3 }}
              style={styles.ImgDetail}
            />
          </View>
        </Swiper>
        <View style={styles.priceContent} >
          <View style={{ marginTop: 10 }}>
            <Text style={styles.txtPrice}>{detail.NameProduct}</Text>
            <Text style={styles.Detail}>Price: {detail.Price} ₫</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.startContent} onPress={() => addFavorite()}>
              <AntDesign
                name={heart ? 'heart' : 'hearto'}
                color={heart ? '#990000' : 'grey'}
                size={30}
                style={styles.maginLeft10}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.Detail}>Detail</Text>
          <Text style={styles.Detail}>{detail.Description}</Text>
        </View>
      </ScrollView>
      <View style={styles.groupBtn}>
        <TouchableOpacity style={styles.btnAdd} onPress={onAddCart}>
          <Text style={styles.txtAdd}>ADD TO CARD</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default detail