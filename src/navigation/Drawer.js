import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screen/Home";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="Home" component={Home} />
    </DrawerNav.Navigator>
  );
}
