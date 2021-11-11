import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { removeItem } from '../reducers/wishList/action';
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/wishListStyle';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WishList = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.listReducer.list);
  const onRemoveItem = (item) => () => dispatch(removeItem(item)  )
  const Header = () => {
    return (
      <View>
        <View style={styles.headerFl}>
          <Text style={styles.txtHeaderFl} >{data.length} styles</Text>
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
    data?.length === 0 ?
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
        <TouchableOpacity style={styles.btnAdd} onPress={()=>{navigation.navigate("homeMain")}}>
          <Text style={styles.txtAdd}>SHOP NOW</Text>
        </TouchableOpacity>
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