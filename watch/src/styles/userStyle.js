import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:220,
        position:'absolute'
    },
    avatar:{
        width:120,
        height:120,
        borderRadius:100,
        marginTop:160,
        alignSelf:'center',
        borderColor:'silver',
        borderWidth:0.1
    },
    name:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    },
    list:{
        marginTop:10,
        fontSize:16,
        fontWeight:'bold',
        marginLeft:5,
        marginLeft:20
    },
    rederItemContent: {
        height: 200,
        flexDirection: 'row',
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1
      },
      alignSelf: {
        alignSelf: 'center'
      },
      imgItem: {
        width: 120,
        height: 170,
        marginLeft: 10
      },
      priceContent: {
        flexDirection: 'row',
        height: '50%'
      },
      priceContent2: {
        marginTop: 11,
        marginLeft: 10,
        width: 230
      },
      Size15Bold: {
        fontWeight: 'bold',
        fontSize: 15
      },
      Colorsilver: {
        color: 'silver'
      },
      marginTop10: {
        marginTop: 10
      },
      height100: {
        height: 100
      },
      groupIn4: {
        flexDirection: 'row',
        height: 50,
        marginLeft: 10,
        marginRight: 10
      },
      btnColor: {
        flexDirection: 'row',
        borderRightColor: 'silver',
        borderRightWidth: 1,
        width: '39%',
        height: '50%',
        justifyContent: 'space-between'
      },
      btn: {
        flexDirection: 'row',
        width: '39%',
        height: '50%',
        justifyContent: 'space-between',
        marginLeft: 10
      },
      header: {
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      screenName: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      RenderContent: {
        height: 110,
        flexDirection: 'row',
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        justifyContent:'space-evenly'
      },
      alightSelf: {
        alignSelf: 'center'
      },
      renderIMg: {
        width: 70,
        height: 100,
      },
      groupIcon: {
        flexDirection: 'row',
        height: '30%',
        alignSelf:'center'
      },
      groupPrice: {
        marginTop: 11,
        marginLeft: 10,
        width: 230,
        alightSelf:'center'
      },
      oldPrice: {
        fontWeight: 'bold',
        color: 'silver',
        fontSize: 15
      },
      newPrice: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 15,
        marginLeft: 10
      },
      greyColor: {
        color: 'grey',
        fontWeight:'bold'
      },
      Typecontent: {
        flexDirection: 'row',
        height: 100,
        marginLeft: 10,
        marginRight: 10,
      },
      ContentShop: {
        flexDirection: 'row',
        width: '80%',
        height: '80%',
        justifyContent: 'space-between'
      },
      txtSize14Bold: {
        fontWeight: 'bold',
        fontSize: 14
      },
      txtContent: {
        fontWeight: 'bold',
        fontSize: 14,
        color:'silver'
      },
      ContentType: {
        flexDirection: 'row',
        width: '39%',
        height: '50%',
        justifyContent: 'space-between',
        marginLeft: 10
      },
      contentQuantity: {
        flexDirection: 'row',
        width: '37%',
        height: '50%',
        justifyContent: 'space-between',
        marginLeft: 10
      },
})
export default styles;
