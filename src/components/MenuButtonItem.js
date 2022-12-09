import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const MenuButtonItem = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={style.buttonContainer} onPress={onPress}>
      <Text style={style.titleNav}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "black",
    borderRadius: 100,
    width: "75%",
    height: 50,
    borderColor: "black",
    borderWidth: 2,
    marginLeft: 38,
  },
  titleNav: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
  },
});

export default MenuButtonItem;
