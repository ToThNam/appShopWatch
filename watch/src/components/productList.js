import React from 'react'
import { Text, Image, FlatList, View, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/productListStyle';
const productL = ({ route, navigation }) => {
  const { productList } = route.params;
  const dataListProduct = productList.dataList
  const onMoveToDetail = (dataDetail ) => () => {
    navigation.navigate('detail', { detail: dataDetail });
  }
  const Header = () => {
    return (
      <View style={styles.headerFl}>
      <Text style={styles.txtHeaderFl} >{dataListProduct.length} styles</Text>
    </View>
    )
  }
  return (
    <View style={{ height: "100%" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name={'arrow-back-outline'} size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>{productList.category.NameManufacturer}</Text>
      </View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnHeader}>
          <Text style={styles.txtTitle}>SORT</Text>
          <Ionicons name={'chevron-down'} size={18} />
        </TouchableOpacity>
        <View style={styles.viewContent} />
        <TouchableOpacity style={styles.btnHeader}>
          <Text style={styles.txtTitle}>REFINE</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataListProduct}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={styles.Flat}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={onMoveToDetail(item)} >
                <Image
                  source={{ uri: item.ImageProduct }}
                  style={styles.ProductImg}
                />
              </TouchableOpacity>
              <View style={styles.tleIn4}>
                <Text style={styles.proPrice}>{item.NameProduct}</Text>
              </View>
              <View>
                <Text style={styles.proTle}>Giá: {item.Price} đ</Text>
              </View>
            </View>
          )
        }}
        keyExtractor={(e,i)=>i.toString()}
        ListHeaderComponent={Header}
      />
    </View>
  )
}
export default productL