import { Text, View, Image } from "react-native";
import React from "react";

function Bicycle() {
  const city = "south west";
  const peoples = [
    { name: "Erdiana", fams: "Sister" },
    { name: "Emanuel", fams: "Brother" },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text>Hi i'm a Bicycle</Text>
      <TakeARide peoples={peoples} />
      {Place2Go(city)}
      <View>
        <Text>Sepeda Gunung</Text>
        <Image source={{ uri: "https://trexsporting.com/images/products/11-KbmXViHodZ.jpg" }} style={{ width: 200, height: 200 }} />
      </View>

      <View>
        <Text>Sepeda Gunung</Text>
        <Image source={{ uri: "https://trexsporting.com/images/products/33-b0oJHNiIPX.png" }} style={{ width: 200, height: 200 }} />
      </View>
    </View>
  );
}

export default Bicycle;

const TakeARide = ({ peoples }) => {
  return (
    <View>
      <Text>Let's go riding with us:</Text>
      {peoples.map((v, index) => (
        <View key={index}>
          <Text>
            {v.name} / my {v.fams}
          </Text>
        </View>
      ))}
    </View>
  );
};

function Place2Go(value) {
  return <Text>We'r going to {value} now, come on.</Text>;
}
