import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,TouchableOpacity } from "react-native";

const URL = "https://google.com";


const DATA = [
  {
    title: "SEMESTER 6 SUBJECTS",
    data: ["Compiler Design", "Computer Graphics and Image Processing", "Algorith Analysis and Design","Foundations of Machine Learning","Foundations of Security in Computing "]
  },
  {
    title: "Results",
    data: ["Series Examination 1", "Series Examination 2"]
  },
  {
    title: "Attendance",
    data: ["Attendance Sheet"]
  }

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text  style={styles.title}>{title}</Text>
   
  </View>
);

const CSE = ({navigation}) => (
  <SafeAreaView style={styles.container}>
   
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
        
        
      )}
    />
     
     <TouchableOpacity onPress={()=>navigation.navigate('notes')} > 
   <Text style={styles.note} >
       Notes
   </Text>
   </TouchableOpacity>
 
  </SafeAreaView>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 25,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  note:{
    marginTop:-570,
    marginLeft:288,
    fontSize:23
  }
});

export default CSE;