import {
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  View,
  Button,
  Alert,
} from "react-native";

const image = {
  uri: "https://wallpaperaccess.com/full/1369012.jpg",
};

export default function SignUp() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Sign Up</Text>
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput} placeholder="LastName" />
        <TextInput style={styles.textInput} placeholder="Photo" />
        <TextInput style={styles.textInput} placeholder="Age" />
        <TextInput style={styles.textInput} placeholder="Email" />
        <TextInput style={styles.textInput} placeholder="Password" />
        <Button
          title="Register"
          color="#000"
          onPress={() => Alert.alert("Correct Registration")}
        />
      </ImageBackground>
    </View>
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
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 50,
    color: "black",
  },
});
