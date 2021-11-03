import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameScreen: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    width:'95%',
    alignSelf:'center',
    marginVertical:10,
    borderBottomColor:'silver',
    borderBottomWidth:1,
    borderRadius:10
  },
  imgStore: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  txtContainer:{
    justifyContent:'space-evenly',
    width:'73%',
  },
  txtProduct:{
      color:'black',
      marginLeft:10,
  }
});
export default styles;
