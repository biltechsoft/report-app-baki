import * as React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./src/navigation/AppStack";
import AppStacks from "./src/navigation/AppStacks";

import SplashScreen from "./src/rootscreen/SignInScreen";
import SignInScreen from "./src/rootscreen/SignInScreen";
import SignUpScreen from "./src/rootscreen/SignUpScreen";

import RootStackScreen from "./src/navigation/RootStackScreen";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(1);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !==null? <AppStack/>:<RootStackScreen />}  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, marginTop: 50 },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
