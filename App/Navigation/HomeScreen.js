import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Colors from "../Constants/Colors";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from "../Screens/Login/index"
const Stack = createNativeStackNavigator();
function HomeStack(){
  return(
    <SafeAreaView style={{flex:1}}>
    <StatusBar
      translucent={true}
    />

  <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
<Stack.Screen name="Login" component={index} />
  </Stack.Navigator>
    </SafeAreaView>
  )

}

export default HomeStack

