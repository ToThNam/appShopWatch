
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
  },
  title:{
    fontSize:20,
    color:'grey',
    marginLeft:10,
    fontWeight:'bold'
  },
  wrap: {
    height: 500,
  },
  slide: {
    width: 400,
    height: 50,
  },
  ImgDetail: {
    width: '100%',
    height: 500,
  },
  priceContent: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'silver'
  },
  txtPrice: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10
  },
  startContent: {
    flexDirection: 'row',
    marginTop: 12,
    marginRight: 10
  },
  Detail: {
    color: 'grey',
    marginHorizontal: 10,
    marginTop: 5
  },
  groupBtn: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  maginLeft10: {
    marginLeft: 10
  },
  btnAdd: {
    backgroundColor: 'black',
    width: '60%',
    height: 40,
  },
  txtAdd: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5
  },
});
export default styles;
