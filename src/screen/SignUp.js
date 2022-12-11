import {
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";
import axios from "axios";

const image = {
  uri: "https://wallpaperaccess.com/full/1369012.jpg",
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function saveData() {
    const userValue = {
      name: name,
      lastName: lastName,
      photo: photo,
      age: age,
      email: email,
      password: password,
      role: "user",
    };
    try {
      let res = await axios.post(`${BASE_URL}/api/auth/`, userValue);
      console.log(userValue);
      if (res.data.success) {
        Alert.alert("check your mail");
      } else {
        Alert.alert("check mail or password");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Sign Up</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="LastName"
          onChangeText={(text) => setLastName(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Photo"
          onChangeText={(text) => setPhoto(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <Button onChange={saveData} title="Register" color="#000" />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    color: "black",
    fontSize: 30,
    backgroundColor: "white",
    padding: 2,
    margin: 20,
    borderRadius: 10,
    width: "40%",
    minHeight: "4%",
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 750,
    width: "100%",
  },
  text: {
    fontSize: 50,
    color: "black",
  },
});
