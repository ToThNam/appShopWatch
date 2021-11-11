import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { getCategory, getProduct } from "../sevices/api";
import styles from "../styles/homeMainStyles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeImgFooter from "../assets/data/HomeImgFooter";

const homeMain = ({ navigation }) => {
  const [categoryDataApi, setCategoryDataApi] = useState();
  const [productDataApi, setProductDataApi] = useState();
  const getApiProduct = async () => {
    const result = await getProduct()
    setProductDataApi(result.data.data)
  };
  const getApiCategory = async () => {
    const result = await getCategory();
    setCategoryDataApi(result.data.data);
  };
  useEffect(() => {
    getApiCategory();
    getApiProduct();
  }, [])
  const groupData = categoryDataApi?.map((e ) => ({
    category: e,
    dataList: productDataApi?.filter((element ) => element.IDManufacturer == e.IDManufacturer),
  }));
  const [text, onChangeText] = useState("Useless Text");
  const onMoveToProduct = (data ) => () => {
    navigation.navigate('productList', { productList: data });
  }
  const onMoveToDetail = (data ) => () => {
    navigation.navigate('detail', { detail: data });
  }
  let quantytity  = []
  for (let i = 0; i < categoryDataApi?.length; i++) {
    quantytity = categoryDataApi?.map((e ) => e.IDManufacturer)[i]
  }
  const Header = () => {
    return (
      <View style={styles.headerFl}>
        <Text style={styles.txtHeaderFl} >All Special Offers({quantytity})</Text>
      </View>
    )
  }
  const Footer = () => {
    return (
      <View >
        <View style={styles.recently}>
          <Text style={styles.txtrecently}>RECENTLY VIEWED</Text>
        </View>
        <FlatList
          horizontal
          data={productDataApi}
          style={{marginBottom:15}}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={onMoveToDetail(item)} >
                <Image source={{ uri: item.ImageProduct }} style={styles.imgFl} resizeMode="cover" />
                <Text style={styles.txtProduct}>{item.NameProduct}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.id?.toString()}
        />
        <View style={styles.infor}>
          <Text style={[styles.txtIn4]}>Shop the 'Gram</Text>
          <Text style={[styles.txtSize15]}>Upload your favorite SB outfit on Instagram with</Text>
          <Text style={[styles.txtSize15]}>@HaiTrieuWatch for a chance to be featured!</Text>
          <Text style={[styles.txtSize20]}>@HaiTrieuWatch</Text>
        </View>
        <View style={styles.FooterImg}>
          {
            HomeImgFooter.map((e, i) => {
              return (
                <View key={e.id} style={styles.margin10}>
                  <Image source={{ uri: e.url }} style={styles.imgFooter} />
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Image
          style={styles.Logo}
          source={{uri : 'https://cdn3.dhht.vn/wp-content/uploads/2019/11/logo-full-mau.png'}}
        />
        <Text style={styles.title}>ĐỒNG HỒ HẢI TRIỀU</Text>
      </View>
      <View style={styles.Seach_title}>
        <TouchableOpacity style={[styles.contentSeach]}>
          <Ionicons name="search-sharp" size={25} style={styles.marginLeft20} />
          <TextInput style={styles.inPut}
            onChangeText={onChangeText}
            placeholder="Search"
            placeholderTextColor={'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.groupIcon]}>
          <FontAwesome name="microphone" size={20} style={styles.marginLeft120} />
          <Ionicons name="md-scan" size={20} style={styles.marginLeft20} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={groupData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.bttn} onPress={onMoveToProduct(item)} >
              <Image source={{ uri: item.category.ImageManufacturer }} style={styles.imgbttn} resizeMode="cover" />
            </TouchableOpacity>
          )
        }}
        keyExtractor={(e,i)=>i.toString()}
        ListFooterComponent={Footer}
        ListHeaderComponent={Header}
      />
    </View>
  )
};
export default homeMain;