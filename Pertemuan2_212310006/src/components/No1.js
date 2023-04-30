import React from "react";
import { Image } from "react-native";
import { StatusBar } from "react-native";
import { Text, View, StyleSheet } from "react-native";

const No1 = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <Text style={styles.text}>History of Bicycle</Text>
        <Text style={{ textAlign: "justify", fontSize: 18 }}>
          A bicycle, also called a<Text style={{ color: "red" }}>pedal cycle</Text>,<Text style={{ fontWeight: "bold" }}>bike</Text>,<Text style={{ fontStyle: "italic" }}>push-bike or cycle</Text>, is a human-powered on m o t o r - p o w e
          r e d assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.
        </Text>
      </View>

      <View style={{ backgroundColor: "aqua", padding: 20 }}>
        <View style={{ borderWidth: 1, backgroundColor: "white" }}>
          <Image source={require("../../assets/417777.png")} style={{ width: 80, height: 80 }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "brown",
    color: "#fff",
    textAlign: "center",
    textDecorationLine: "underline",
    padding: 10,
    marginBottom: 10,
  },
});

export default No1;
