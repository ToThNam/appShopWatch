import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'white'
    },
    Img:{
        width:150,
        height:150,
        alignSelf:'center',
        marginBottom:60,
        marginTop:100,
    },
    TextIP:{
        borderBottomWidth:1,
        borderBottomColor:'silver',
        height:45,
        width:300,
        // marginTop:10,
    },
    TextIPPassword:{
        borderBottomWidth:1,
        borderBottomColor:'silver',
        height:45,
        width:300,
        marginTop:5,
    },
    Signin:{
        backgroundColor:'#AA0000',
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        borderRadius:10,
    },
    txtLogin:{
        color:'white',
        fontSize:17,
    },
    txtSignUp:{
        color:'black',
        fontWeight:'bold',
        marginTop:10,
    },
    errView:{
        alignItems: 'center',
        marginTop: 10,
        marginBottom:5
    },
    errInput:{
        color: 'red', 
        position: 'absolute'
    },
    groupButton:{
        flexDirection:'row',
    },
    Signin:{
        backgroundColor:'#AA0000',
        width:130,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        // marginTop:30,
        borderRadius:25,
        margin: 20
    },
    Signin2:{
        backgroundColor:'white',
        width:130,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#AA0000',
        borderRadius:25,
        margin: 20
    },
    txtLogin2:{
        color:'#AA0000',
        fontSize:17,
    },

})
export default styles