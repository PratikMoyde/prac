import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import Colors from "../../Constants/Colors";

class Login extends Component {
  constructor() {
    super();
    this.state = {};

  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.textcrumpusview}>
          <Text style={styles.textcrumpus}>
            CRUMPUS
          </Text>
        </View>
        <View style={[styles.secondcontainer,styles.shadowstyle]}>

        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.PrimaryColor1,
  },
  textcrumpusview: {
    alignItems: "center",
    marginTop:'5%',

  },
  textcrumpus: {
    fontSize: RFPercentage(5),
    color: Colors.purewhite,
    marginTop: StatusBar.currentHeight,
    fontWeight:"600",
  },
  secondcontainer: {
    backgroundColor: Colors.PrimaryColor2,
    height: "70%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    marginTop:'5%',
  },
  shadowstyle:{
    shadowColor:Colors.pureblack,
    shadowOffset:{width:-2,height:5},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation:6
  },
});
export default Login;
