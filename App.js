import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Drawer from "./src/navigation/Drawer";
import rootReducers from "./src/redux/reducers/rootReducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducers });
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}
