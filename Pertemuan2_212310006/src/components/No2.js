import React, { Component } from "react";
import { View } from "react-native";
import Typo from "./Typo.js";
import Img from "./Img.js";

export class No2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {Typo()}
        {Img()}
      </View>
    );
  }
}

export default No2;
