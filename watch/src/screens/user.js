import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons  from 'react-native-vector-icons/Ionicons'
import styles from '../styles/userStyle';
import { logOut } from '../reducers/authentication/action';

export default function user({ navigation }) {
  const dataUser = useSelector(store => store.authReducer.userdata);
  const dispatch = useDispatch();
  const SignOut =()=> dispatch(logOut())
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView>
                <View style={styles.hello}>
                    <Text style={styles.txthello}>Hello, {dataUser[0]?.data.username}!</Text>
                </View>
                <TouchableOpacity style={styles.btnorder} >
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>MY ORDERS</Text>
                            <Text style={styles.txtmission}>Orders Status, History and Tracking</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnorder} onPress={() => navigation.navigate('profile')}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>PROFILE</Text>
                            <Text style={styles.txtmission}>Manage name, email, password</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnorder}  onPress={() => navigation.navigate('WishList')}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>MY LOVE STYLE</Text>
                            <Text style={styles.txtmission}>Wish list status, product of my love</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnorder}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>MANAGE PREFERENCE</Text>
                            <Text style={styles.txtmission}>Marketing preference for emailand push notification</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnorder} >
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>FIND A STORE</Text>
                            <Text style={styles.txtmission}>Manage shipping and billing address</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnorder}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>FOREVER 21 CREDIT CARD</Text>
                            <Text style={styles.txtmission}>Manage F21 Credit Card</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnoti}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>FOREVER 21 VISA CREDIT CARD</Text>
                            <Text style={styles.txtmission}>Manage F21 Visa Credit Card</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnoti}>
                        <View style={styles.description}>
                            <Text style={styles.txtoption}>NOTIFICATIONS</Text>
                            <Text style={styles.txtmission}>View events and promotions</Text>
                        </View>
                            <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginRight:5}}/>
                </TouchableOpacity>  
                <View style={styles.signout}>
                  <TouchableOpacity style={styles.btnAdd} onPress={()=>SignOut()}>
                    <Text style={styles.txtAdd}>SIGN OUT</Text>
                 </TouchableOpacity>
                </View>
            </ScrollView>
    </View>
  );
}
