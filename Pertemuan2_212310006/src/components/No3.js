import { View, Text, Image } from "react-native";
import React from "react";

const No3 = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "purple" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image source={require("../../assets/Logo IBIK Baru 2022.png")} style={{ width: 100, height: 100 }} />
      </View>
      <Text style={{ color: "white", marginBottom: 80 }}>Loading...</Text>
    </View>
  );
};

export default No3;
