import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const S6 = ({navigation}) => {
  return (
  
    
      <View >
      <TouchableOpacity onPress={()=>navigation.navigate('CSE')} > 
   <Text style = {styles.an}>
       CSE
   </Text>
   </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('EEE')} > 
   <Text style = {styles.bn}>
       EEE
   </Text>
   </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('ECE')} > 
   <Text style = {styles.cn}>
       ECE
   </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>navigation.navigate('EEE')} > 
   <Text style = {styles.dn}>
       ME
   </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>navigation.navigate('Attendance')} > 
   <Text style = {styles.fn}>
       attendance
   </Text>
   </TouchableOpacity>
  </View>
  )
}

export default S6

const styles = StyleSheet.create({
  an:{
  backgroundColor: "#FBEEC1",
  padding: 20,
  marginVertical: 8,
  width:89,
  marginLeft:173,
  borderRadius:17,
  fontSize:25
 },
 bn:{
  backgroundColor: "#85DB",
  padding: 20,
  marginVertical: 8,
  width:89,
  marginLeft:173,
  borderRadius:17,
  fontSize:25
 },
 cn:{
  backgroundColor: "#CAFAFE",
  padding: 20,
  marginVertical: 8,
  width:89,
  marginLeft:173,
  borderRadius:17,
  fontSize:25
 },
 dn:{
  backgroundColor: "#E8A87C",
  padding: 20,
  marginVertical: 8,
  width:89,
  marginLeft:173,
  borderRadius:17,
  fontSize:25
 },
 fn:{
    backgroundColor: "#E8A87C",
    padding: 20,
    marginVertical: 8,
    width:189,
    marginLeft:123,
    borderRadius:17,
    fontSize:25
   }
})