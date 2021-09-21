import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  static getDerivedStateFromProps(){
    console.log("get Derived State From Props");
  }


  render() {
    console.log("render")
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
