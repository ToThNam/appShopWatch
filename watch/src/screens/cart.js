import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/cartStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { removeItem,removeAll } from '../reducers/cart/action';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.cartReducer.cart);
  const onRemoveAll = () => dispatch(removeAll())
  const onRemoveItem = (item) => () => dispatch(removeItem(item))
  const quantytities = data.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.quantity
  }, 0)
  
  let total = []
  for (let e = 0; e < data.length; e++) {
    const element = data[e];
    if (element != 0) {
      const reducer = (previousValue, currentValue) => previousValue + currentValue;
      const totalsub = data.map(e => e.Price * e.quantity)
      total = totalsub.reduce(reducer)
    }
  }

  const Header = () => {
    return (
      <View>
        <View style={[styles.FLheader]}>
          <Text style={[styles.txtFlheader]}>{quantytities} sản phẩm, tổng cộng {total} vnd</Text>
        </View>
      </View>
    )
  }
  const Footer = () => (
    <View>
      <TouchableOpacity style={[styles.btnViewContent]} onPress={onRemoveAll}>
        <Text style={styles.btnView}>Xóa hết</Text>
      </TouchableOpacity>
      <View style={styles.FLfooter}>
        <Text style={[styles.ordersummer]}>Hóa đơn</Text>
        <View >
          <View style={styles.ContentFt}>
            <Text style={[styles.txtSize15]}>Tổng giá cơ bản</Text>
            <Text style={[styles.txtSize15]}>{total}đ</Text>
          </View>
          <View style={styles.ContentFt}>
            <Text style={[styles.txtSize15]}>Khuyến mãi</Text>
            <Text style={[styles.txtSize15]}>0 đ</Text>
          </View>
          <View style={styles.ContentFt}>
            <Text style={[styles.txtSize20Bold]}>Tổng cộng</Text>
            <Text style={[styles.txtSize20Bold]}>{total}đ</Text>
          </View>
        </View>
      </View>
    </View>
  )
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
            <Text style={styles.txtSize14Bold}>Số lượng: {item.quantity}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
      quantytities === 0 ?
        <View style={[styles.emtyView]}>
          <View style={[styles.header]}>
            <View>
              <Text style={[styles.screenName]}>Cart</Text>
            </View>
        </View>
          <Image
            source={require('../assets/images/Capture.png')}
            style={[styles.emtyImage]}
          />
        <TouchableOpacity style={styles.btnAdd} onPress={()=>{navigation.navigate("homeMain")}}>
          <Text style={styles.txtAdd}>SHOP NOW</Text>
        </TouchableOpacity>
        </View>:
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <View style={[styles.header]}>
        <TouchableOpacity>
          <Text style={[styles.screenName]}>GIỎ HÀNG</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.IDProduct.toString()}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        style={{ height: '100%' }}
        showsVerticalScrollIndicator={false}
      />
      <View style={[styles.footer]}>
        <TouchableOpacity style={[styles.btnCheckout]} onPress={onRemoveAll}>
          <Text style={styles.txtCheckout}>THANH TOÁN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart