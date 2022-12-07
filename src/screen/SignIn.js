import { StatusBar } from "expo-status-bar";
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
  uri: "https://i.redd.it/0frpmc4w9gm41.png",
};

export default function SignIn() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Sign In</Text>
        <TextInput style={styles.textInput} placeholder="Your Email" />
        <TextInput style={styles.textInput} placeholder="Your Password" />
        <Button
          styles={styles.textButton}
          color="#000"
          title="Enter"
          onPress={() => Alert.alert("Authorized Income")}
        />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textInput: {
    color: "black",
    fontSize: 30,
    height: 50,
    backgroundColor: "white",
    padding: 10,
    margin: 20,
    borderRadius: 10,
    width: "50%",
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
