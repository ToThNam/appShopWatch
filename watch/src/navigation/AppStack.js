import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import homeMain from '../screens/homeMain';
import storelist from '../screens/storelist';
import cart from '../screens/cart';
import user from '../screens/user';
import productList from '../components/productList';
import detail from '../components/detail';
import WishList from '../screens/wishList';
import Login from '../screens/Login';
import Register from '../components/register';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const Tab = () =>{
  const data = useSelector((store) => store.cartReducer.cart);
  const quantytities = data.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.quantity
  }, 0)
  return(
    <Bottom.Navigator initialRouteName="Trang chủ" screenOptions={({ route }) => ({
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: true,
      tabBarLabel: ({ focused }) => {
        let lable;
        switch (route.name) {
          case 'Trang chủ':
            return lable = <Text style={{ fontSize: 10, fontWeight: 'bold', color: focused ? '#000' : 'grey' }} >Trang chủ</Text>;
          case 'Cửa hàng':
            return lable = <Text style={{ fontSize: 10, fontWeight: 'bold', color: focused ? '#000' : 'grey' }}>Cửa hàng</Text>;
          case 'Giỏ Hàng':
            return lable = <Text style={{ fontSize: 10, fontWeight: 'bold', color: focused ? '#000' : 'grey' }}>Giỏ Hàng</Text>;
          case 'Thông tin':
            return lable = <Text style={{ fontSize: 10, fontWeight: 'bold', color: focused ? '#000' : 'grey' }}>Thông tin</Text>;

        }
      },
      tabBarIcon: ({ focused, color }) => {
        let iconName;
        if (route.name === "Trang chủ") {
          iconName = focused ? "home" : "home-outline"
          return <MaterialCommunityIcons name={iconName} size={25} color={"#000"} />
        }
        else if (route.name === "Cửa hàng") {
          iconName = focused ? "store" : "store-outline"
          return <MaterialCommunityIcons name={iconName} size={25} color={"#000"} />
        }
        else if (route.name === "Giỏ Hàng") {
          iconName = focused ? "cart" : "cart-outline"
          return <MaterialCommunityIcons name={iconName} size={25} color={"#000"} />
        }
        else if (route.name === "Thông tin") {
          iconName = focused ? "account" : "account-outline"
          return <MaterialCommunityIcons name={iconName} size={25} color={"#000"} />
        }
      }
    })}>
      <Bottom.Screen options={{ header: () => null, headerShown: false }} name="Trang chủ" component={StackHome} />
      <Bottom.Screen options={{ header: () => null, headerShown: false }} name="Cửa hàng" component={storelist} />
      {quantytities > 0?
      <Bottom.Screen options={{ header: () => null, headerShown: false , tabBarBadge: quantytities}} name="Giỏ Hàng" component={cart} />:
      <Bottom.Screen options={{ header: () => null, headerShown: false }} name="Giỏ Hàng" component={cart} />
      }
      <Bottom.Screen options={{ header: () => null, headerShown: false }} name="Thông tin" component={StackUser} />
    </Bottom.Navigator>
  )
}
const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ header: () => null }} name="Login" component={Login} />
      <Stack.Screen options={{ header: () => null }} name="Register" component={Register} />
    </Stack.Navigator>
  )
}
const StackHome = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{ header: () => null }} name="homeMain" component={homeMain} />
      <Stack.Screen options={{ header: () => null }} name="productList" component={productList} />
      <Stack.Screen options={{ header: () => null }} name="detail" component={detail} />
    </Stack.Navigator>
  );
};
const StackUser = () => {
  return(
  <Stack.Navigator >
    <Stack.Screen options={{ header: () => null }} name="user" component={user} />
    <Stack.Screen options={{ header: () => null }} name="WishList" component={WishList} />
    <Stack.Screen options={{ header: () => null }} name="homeMain" component={homeMain} />
    <Stack.Screen options={{ header: () => null }} name="cart" component={cart} />
  </Stack.Navigator>
  );
};
const AppStack = () => {
  const isLogin=useSelector(store=>store.authReducer.isLogin)
  return (
    <NavigationContainer>
      {
        isLogin
        ?<Tab/> 
        :<Auth/>
      }
    </NavigationContainer>
  )
}
export default AppStack