import { Text, View } from "react-native";
import React, { Component } from "react";

export class Car extends Component {
  constructor(props) {
    super(props);
    this.Come2Go = this.Come2Go.bind(this);
    this.state = {
      merek: "Toyota",
      types: { type: "Matic", model: "Honda Brio" },
    };
  }

  Come2Go(value) {
    return (
      <View>
        <Text>Let's go running away from duty</Text>
        <Text>With us only {value} IDR</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View>
          <Text>Hi i'm a Car</Text>
          <Text>Merek: {this.state.merek}</Text>
        </View>
        <View>
          <Text>Type: {this.state.types.type}</Text>
          <Text>Model: {this.state.types.model}</Text>
          {this.Come2Go(200000)}
        </View>
      </View>
    );
  }
}

export default Car;
