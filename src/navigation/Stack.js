import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../Componentes/SignIn";
import SignUp from "../Componentes/SignUp";
import Home from "../Componentes/Home";

const StackNav = createNativeStackNavigator();

export default function Stack() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Login" component={SignIn} />
      <StackNav.Screen name="Counter" component={SignUp} />
      <StackNav.Screen name="Counter" component={Home} />
    </StackNav.Navigator>
  );
}
