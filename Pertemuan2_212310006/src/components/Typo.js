import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Typo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History of Bicycle</Text>
      <Text style={{ textAlign: "justify", fontSize: 18 }}>
        A bicycle, also called a<Text style={{ color: "red" }}>pedal cycle</Text>,<Text style={{ fontWeight: "bold" }}>bike</Text>,<Text style={{ fontStyle: "italic" }}>push-bike or cycle</Text>, is a human-powered on m o t o r - p o w e r
        e d assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.
      </Text>
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
export default Typo;
