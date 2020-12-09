import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import * as firebase from "firebase";
import "firebase/storage";

export default function App() {
  const [date, setdate] = useState(require("./butterfly.jpg"));
  const firebaseConfig = {
    apiKey: "AIzaSyDsG0tNRyGIG8RJDGV1lMte0l_t0ZNJc2s",
    authDomain: "todo-f19a2.firebaseapp.com",
    projectId: "todo-f19a2",
    storageBucket: "todo-f19a2.appspot.com",
    messagingSenderId: "32968851936",
    appId: "1:32968851936:web:7d3c383ce5f378fb38eb85",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  function set() {
    if (date == require("./butterfly.jpg")) {
      let imageRef = firebase.storage().ref("/images/" + "tree.jpg");
      imageRef
        .getDownloadURL()
        .then((url) => {
          setdate({ uri: url });
        })
        .catch((e) => console.log("getting downloadURL of image error => ", e));
    } else {
      setdate(require("./butterfly.jpg"));
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
        source={date}
        style={{ width: "50%", height: "50%", alignContent: "center" }}
      />
      <View>
        <Button title="firebase check" onPress={set} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
