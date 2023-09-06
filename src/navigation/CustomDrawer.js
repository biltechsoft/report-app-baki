import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#006ae3" }}
      >
        <ImageBackground
          source={require("../../assets/img/AppBG.jpg")}
          style={{ padding: 20, alignItems: "center" }}
        >
          <Image
            source={require("../../assets/img/user.png")}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderColor: "white",
              borderWidth: 2,
              marginBottom: 10,
            }}
          />
          <Text style={{ fontSize: 18, color: "white" }}>
             Yousuf Islam
          </Text>
          <Text style={{ fontSize: 12, color: "#ffffffa6" }}>
            {" "}
            Web Developer
          </Text>
        </ImageBackground>
        <View style={{ backgroundColor: "#9fdbfd" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 5,
          borderTopWidth: 1,
          borderColor: "blue",
          backgroundColor: "lightblue",
        }}
      >
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center",paddingLeft:15 }}>
            <FontAwesome5 name="user" size={20} color="blue" />
            <Text style={{marginLeft:25, color:'blue',fontSize:16,fontWeight:"bold"}}> Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
