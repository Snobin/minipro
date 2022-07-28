import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const Attendance = ({navigation}) => {
  return (
    <View>
      <Text>coming soon...</Text>
      <Button onPress={()=>navigation.push('Login')} title='Login Screen'></Button>
    </View>
  )
}

export default Attendance

const styles = StyleSheet.create({})