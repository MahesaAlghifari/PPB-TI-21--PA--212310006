import React from "react";
import { Text, View } from "react-native";

var name = "Home";
const Motorcycle = () => {
  return (
    <View>
      <Text>Hi i'm Motorcycle</Text>
      <Text>Merek: {name}</Text>
      <Text>Type: {types.type}</Text>
      <Text>Type: {types.model}</Text>
      <Text>Type: {types.harga}</Text>
    </View>
  );
};

export default Motorcycle;

const types = { type: "Matic", model: "Beat", harga: "19000000" };
