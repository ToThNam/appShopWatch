
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  content: {
    height: '100%',
    backgroundColor:'white'
  },
  header: {
    height: 50,
    flexDirection: 'row',
    marginLeft:10,
    alignItems:'center'
  },
  Logo:{
    height:40,
    width:40
  },
  groupIcon: {
    flex: 1,
    flexDirection: 'row',
  },
  inPut: {
    width: '90%',
    height: 60,
    marginLeft: 5
  },
  contentSeach: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#AA0000',
    alignSelf:'center',
    marginLeft:45,
  },
  headerFl: {
    marginTop: 5
  },
  marginLeft20: {
    marginLeft: 20
  },
  marginLeft120: {
    marginLeft: 120
  },
  txtHeaderFl: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#bdbdbd'
  },
  imgFl: {
    width: 150,
    height: 200,
    margin: 5,
    justifyContent: 'space-evenly'
  },
  txtProduct: {
    fontSize: 13,
    alignSelf: 'center'
  },
  infor: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth:0.2,
    borderTopColor:'grey'
  },
  txtIn4: {
    marginTop:10,
    fontSize: 30,
    marginBottom: 8,
    fontWeight: 'bold',
    color:'black'
  },
  txtSize15: {
    fontSize: 15,
    fontWeight:'600',
    color:'black'
  },
  txtSize20: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  FooterImg: {
    flexDirection: 'row',
    width: 'auto',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  imgFooter: {
    width: 180,
    height: 190
  },
  btnViewContent: {
    alignSelf: 'center',
    backgroundColor: '#848484',
    marginTop: 5,
    width: '20%',
    height: 30,
    marginBottom: 10
  },
  margin10: {
    margin: 5
  },
  Seach_title: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor:'#DDDDDD',
    borderTopWidth:0.5,
    backgroundColor:'#EEEEEE',
  },

  btnView: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5
  },
  recently: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    width:170,
    alignItems: 'center',
    margin: 10,
  },
  txtrecently: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    color:'black'
  },
  btnclear: {
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
  },
  bttn: {
    marginTop: 5
  },
  imgbttn: {
    width: '100%',
    height: 230
  }
});
export default styles;
