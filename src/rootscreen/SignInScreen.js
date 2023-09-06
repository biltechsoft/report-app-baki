import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import logo from "../../assets/appLogo.png";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TextInput } from "react-native-gesture-handler";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#a7d49c", "#006ae3"]}
        style={styles.container}
      >
        {/* Inner Content Start */}

        <View style={styles.header}>
          <Animatable.Image
            animation="fadeInDown"
            source={logo}
            style={{ width: 180, height: 180 }}
            resizeMode="stretch"
          />
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <View>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.inputsection}>
            <Text style={{ color: "#08ad86", fontWeight: "bold" }}>
              User ID
            </Text>
            <View style={styles.action}>
              <FontAwesome5
                name="user"
                size={16}
                color="#08ad86"
                style={{ marginTop: 5 }}
              />
              <TextInput placeholder="User ID" style={styles.textinput} />
            </View>
          </View>

          <View style={styles.inputsection}>
            <Text style={{ color: "#08ad86", fontWeight: "bold" }}>
              Password
            </Text>
            <View style={styles.action}>
              <FontAwesome5
                name="lock"
                size={16}
                color="#08ad86"
                style={{ marginTop: 5 }}
              />
              <TextInput placeholder="Password" secureTextEntry={true} style={styles.textinput} />
            </View>
          </View>
          <View style={{alignItems:"center"}}>
          <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.getstart}
              >
                <Text style={{ color: "white", fontWeight: "bold", }}>
                  Login <FontAwesome5 name="angle-right" size={13} color="white" />
                </Text>
              </LinearGradient>
          </View>
        </Animatable.View>

        {/* Inner Content End */}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: { flex: 1 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#08ad86",
    textAlign: "center",
    marginBottom: 20,
  },
  action: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#08ad86",
    paddingBottom: 5,
  },
  textinput: {
    marginLeft: 10,
    color: "#05375a",
  },
 
  getstart: {
    width: 150,
    padding: 10,
    fontWeight: "bold",
    color: "white",
    borderRadius: 30,
    alignItems: "center",
  },
});
