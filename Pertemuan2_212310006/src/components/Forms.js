import React from "react";
import { Text, View, TextInput, Image, StyleSheet, SafeAreaView, TouchableOpacity, Button, TouchableHighlight, TouchableWithoutFeedback } from "react-native";

const Forms = () => {
  return (
    <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
      <View style={{ alignItems: "center" }}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/145/145859.png" }} style={{ width: 100, height: 100, borderWidth: 1 }} />
      </View>

      <View>
        <Text>Student ID:</Text>
        <TextInput style={styles.inputText} placeholder="Enter your NPM" keyboardType="numeric" />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text>Fullname:</Text>
        <TextInput style={styles.inputText} placeholder="Enter your name here" />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text>Address:</Text>
        <TextInput style={{ width: 300, height: 50, borderWidth: 1, padding: 10 }} editable multiline numberOfLines={4} maxLength={40} />
      </View>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text style={{ color: "blue", fontSize: 20 }}>Button form OS</Text>
        <View>
          <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.button}>
              <Text style={{ color: "white" }}>Touchable Opacity</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableHighlight activeOpacity={0.6}>
            <View style={styles.button}>
              <Text style={{ color: "white" }}>Touchable Highlight</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableWithoutFeedback activeOpacity={0.6}>
            <View style={styles.button}>
              <Text style={{ color: "white" }}>Touchable Without Feedback</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    width: 300,
    height: 35,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 300,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "purple",
    alignItems: "center",
    marginTop: 10,
  },
});

export default Forms;
