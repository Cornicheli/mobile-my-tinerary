import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Home from "../screen/Home";
import SignIn from "../screen/SignIn";
import SignUp from "../screen/SignUp";
import Hotels from "../screen/Hotels";
import Profile from "../screen/Profile";
import EditProfile from "../screen/EditProfile";
import City from "../screen/City";
import { StyleSheet, View, Text } from "react-native";
import MenuButtonItem from "../components/MenuButtonItem";
import Footer from "../layout/Footer";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <>
      <DrawerNav.Navigator drawerContent={(props) => <MenuItems {...props} />}>
        <DrawerNav.Screen name="Home" component={Home} />
        <DrawerNav.Screen name="SignIn" component={SignIn} />
        <DrawerNav.Screen name="SignUp" component={SignUp} />
        <DrawerNav.Screen name="Hotels" component={Hotels} />
        <DrawerNav.Screen name="Profile" component={Profile} />
        <DrawerNav.Screen name="EditProfile" component={EditProfile} />
        <DrawerNav.Screen name="City" component={City} />
      </DrawerNav.Navigator>
      <View></View>
    </>
  );
}

const MenuItems = ({ navigation }) => {
  return (
    <>
      <DrawerContentScrollView style={StyleSheet.container}>
        <Text style={style.title}> Menu </Text>

        <MenuButtonItem
          text="Home"
          onPress={() => navigation.navigate("Home")}
        />

        <Text style={style.title}> </Text>
        <MenuButtonItem
          text="SignIn"
          onPress={() => navigation.navigate("SignIn")}
        />

        <Text style={style.title}> </Text>
        <MenuButtonItem
          text="SignUp"
          onPress={() => navigation.navigate("SignUp")}
        />

        <Text style={style.title}> </Text>
        <MenuButtonItem
          text="Hotels"
          onPress={() => navigation.navigate("Hotels")}
        />

        <Text style={style.title}> </Text>
        <MenuButtonItem
          text="Profile"
          onPress={() => navigation.navigate("Profile")}
        />

        <Text style={style.title}> </Text>
        <MenuButtonItem
          text="Edit Profile"
          onPress={() => navigation.navigate("EditProfile")}
        />

        <Text style={style.title}> </Text>
        <MenuButtonItem
          text="City"
          onPress={() => navigation.navigate("City")}
        />
      </DrawerContentScrollView>
      <Footer />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 25,
  },
  titleNav: {
    textAlign: "center",
  },
});
