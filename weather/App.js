import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Text, View } from "react-native";
import Map from "./Map";

export default () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{text}</Text>
      </View>
      <Loading />
      <Map />
    </>
  );
};
