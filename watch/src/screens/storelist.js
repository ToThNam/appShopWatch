import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {getStore} from '../sevices/api';
import styles from '../styles/storelistStyle';
const storelist = ({navigation}) => {
  const [storeDataApi, setStoreDataApi] = useState();
  const getApiStore = async () => {
    const result = await getStore();
    setStoreDataApi(result.data.data);
  };
  useEffect(() => {
    getApiStore();
  }, []);
  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
      <View style={[styles.header]}>
        <View>
          <Text style={[styles.nameScreen]}>DANH SÁCH CỬA HÀNG</Text>
        </View>
      </View>
      <FlatList
        data={storeDataApi}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Image source={{uri: item.ImgStore}} style={styles.imgStore} />
              <View style={styles.txtContainer}>
                <Text style={styles.txtProduct}>{item.NameStore}</Text>
                <Text style={styles.txtProduct}>{item.Address}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id?.toString()}
      />
    </View>
  );
};

export default storelist;
