import { View, Image } from "react-native";
import React from "react";

const Img = () => {
  return (
    <View style={{ backgroundColor: "aqua", padding: 20 }}>
      <View style={{ borderWidth: 1, backgroundColor: "white" }}>
        <Image source={require("../../assets/417777.png")} style={{ width: 80, height: 80 }} />
      </View>
    </View>
  );
};

export default Img;
