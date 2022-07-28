import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Button,SafeAreaView, SectionList, StatusBar} from 'react-native'
import { auth } from '../firebase';


console.log('accepted')

const stack=createStackNavigator();
const HomeScreen = () => {
  const navigation = useNavigation()
  
  const handlesignout = () => {
    auth
      .signOut()
      .then(()=> {
        navigation.replace("Login")
        
      })
      .catch(error => alert(error.message))
  }

  return (
    <View >
      <Text style={styles.mail}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handlesignout}
        style={styles}
      >
       <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <View >
      <TouchableOpacity onPress={()=>navigation.navigate('S1')} > 
   <Text style = {styles.n1}>
       S1
   </Text>
   </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('S2')} > 
   <Text style = {styles.n2}>
       S2
   </Text>
   </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('S3')} > 
   <Text style = {styles.n3}>
       S3
   </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>navigation.navigate('S4')} > 
   <Text style = {styles.n4}>
       S4
   </Text>
   </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate('S5')} > 
   <Text style = {styles.n5}>
       S5
   </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>navigation.navigate('S6')} > 
   <Text style = {styles.n6}>
       S6
   </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>navigation.navigate('S7')} > 
   <Text style = {styles.n7}>
       S7
   </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>navigation.navigate('S8')} > 
   <Text style = {styles.n8}>
       S8
   </Text>
   </TouchableOpacity>
      </View>
      
     
      
    </View>
    
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 buttonText:{
  fontSize:20,
  marginLeft:300,
  color:"red"
  
 },
 n1:{
  backgroundColor: "#FBEEC1",
  padding: 20,
  marginVertical: 20,
  width:89,
  marginLeft:53,
  borderRadius:17,
  fontSize:25
 },
 n2:{
  backgroundColor: "#FBEEC1",
  padding: 20,
  marginTop:-78,
  width:89,
  marginLeft:247,
  borderRadius:17,
  fontSize:25
 },
 n3:{
  backgroundColor: "#FC4445",
  padding: 20,
  marginVertical: 8,
  width:89,
  marginLeft:53,
  borderRadius:17,
  fontSize:25
 },
 n4:{
  backgroundColor: "#FC4445",
  padding: 20,
  marginVertical: 8,
  width:89,
  marginTop:-78,
  marginLeft:247,
  borderRadius:17,
  fontSize:25
 },
 n5:{
  backgroundColor: "#FBEEC1",
  padding: 20,
  marginVertical: 8,
  width:89,
  marginLeft:53,
  borderRadius:17,
  fontSize:25
 },
 n6:{
  backgroundColor: "#FBEEC1",
  padding: 20,
  marginVertical: 8,
  marginTop:-78,
  width:89,
  marginLeft:247,
  borderRadius:17,
  fontSize:25
 },
 n7:{
  backgroundColor: "#FC4445",
  padding: 20,
  marginVertical: 8,
  width:89,
  marginLeft:53,
  borderRadius:17,
  fontSize:25
 },
 n8:{
  backgroundColor: "#FC4445",
  padding: 20,
  marginVertical: 8,
  width:89,
  marginTop:-78,
  marginLeft:247,
  borderRadius:17,
  fontSize:25
 }
 
})
