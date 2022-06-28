
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View, StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScren from "./App/Navigation/HomeScreen"



const App = () => {
  return (
    <NavigationContainer>
    <HomeScren/>
    </NavigationContainer>
    // <View style={styles.maincontainer}>
    //
    // </View>
  );
};

const styles = StyleSheet.create({
maincontainer:{
  flex:1,
  backgroundColor:'#000000',
  // height:"100%",
  // width:"100%"
}
});

export default App;
