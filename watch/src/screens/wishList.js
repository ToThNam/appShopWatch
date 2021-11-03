import React, { useState,useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import styles from '../styles/wishListStyle';
import { useDispatch, useSelector } from "react-redux";
import FontAwesome from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WishList = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData]=useState()
  const dataList = useSelector((store) => store.wishlistReducer.list);
  useEffect(() => {
    setData(dataList)
  }, [dataList])
  const onRemoveItem = (item) => () => dispatch({ type: 'REMOVE_ITEM', data: item })
  const quantytities = data?.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.quantity
  }, 0)
  const Header = () => {
    return (
      <View>
        <View style={[styles.FLheader]}>
          {/* <Text style={[styles.txtFlheader]}>sản phẩm, tổng cộng</Text> */}
        </View>
      </View>
    )
  }
  const renderItem = ({ item }) => (
    <View style={styles.RenderContent}>
      <View style={styles.alightSelf}>
        <Image
          style={styles.renderIMg}
          source={{ uri: item.ImageProduct }}
        />
      </View>
      <View>
        <View style={styles.groupIcon}>
          <View style={styles.groupPrice}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.greyColor}>{item.NameProduct}</Text>
            </View>
            <Text style={styles.oldPrice}>Giá: {item.Price}đ</Text>
          </View>
          <TouchableOpacity onPress={onRemoveItem(item)}>
            <FontAwesome name='close' size={25} style={{ marginTop: 11 }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }}>
          <View style={styles.Typecontent}>
            <View style={styles.ContentShop}>
              <Text style={styles.txtContent} numberOfLines={4} ellipsizeMode={'tail'}>{item.Description}</Text>
            </View>
          </View>
          <View style={styles.contentQuantity}>
            <Text style={styles.txtSize14Bold}>Yêu thích</Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    quantytities === 0 ?
      <View style={[styles.emtyView]}>
        <View style={[styles.header]}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Ionicons name={'arrow-back-outline'} size={30} />
          </TouchableOpacity>
        <View>
          <Text style={[styles.screenName]}>WishList</Text>
        </View>
      </View>
          <Image
           source={require('../assets/images/Capture.png')}
           style={[styles.emtyImage]}
          />
        </View>:
    <View style={[styles.marginTop10]}>
      <View style={[styles.header]}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name={'arrow-back-outline'} size={30} />
      </TouchableOpacity>
        <View>
          <Text style={[styles.screenName]}>WishList</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.IDProduct.toString()}
        ListHeaderComponent={Header}
        style={{ height: '100%' }}
        showsVerticalScrollIndicator={false}
      />
      <View style={[styles.footer]}>
        <TouchableOpacity style={[styles.btnCheckout]} >
          <Text style={styles.txtCheckout}>THANH TOÁN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WishList