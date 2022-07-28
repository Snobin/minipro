import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const Noduees = ({navigation}) => {
  return (
    <View>
      <Text>Coming Soon....</Text>
      <Button onPress={()=>navigation.replace('Attendance')} title='Next Screen'></Button>
      <Button onPress={()=>navigation.replace('Login')} title='sign out'></Button>
    </View>
  )
}

export default Noduees

const styles = StyleSheet.create({})