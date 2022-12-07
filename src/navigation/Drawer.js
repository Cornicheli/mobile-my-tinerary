import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screen/Home";
import SignUp from "../screen/SignUp";
import SignIn from "../screen/SignIn";
import Profile from "../screen/Profile";
import EditProfile from "../screen/EditProfile";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen name="SignUp" component={SignUp} />
      <DrawerNav.Screen name="SignIn" component={SignIn} />
      <DrawerNav.Screen name="Profile" component={Profile} />
      <DrawerNav.Screen name="Edit Profile" component={EditProfile} />
    </DrawerNav.Navigator>
  );
}
