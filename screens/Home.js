import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  TitilliumWeb_300Light,
  TitilliumWeb_400Regular,
  TitilliumWeb_700Bold,
} from "@expo-google-fonts/titillium-web";

import MnemonicsAPIs from "../model/models";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    TitilliumWeb_300Light,
    TitilliumWeb_400Regular,
    TitilliumWeb_700Bold,
  });
  const requestMnemonic = async () => {
    // When the developer requests the mnemonic list repeatedly, use the component below
    // let returnValue = await MnemonicsAPIs.mnemonics();
    // if (response) {
    //   navigation.navigate("Mnemonic", {mnemonic : returnValue.mnemonic, privateKey : returnValue.privateKey})
    // } else {
    //  Alert.alert(
    //     "경고",
    //     "Mnemonic 12 글자를 가져오는데 실패했습니다.",
    //     { text: "OK" }
    //   );
    // }
    // }
    try {
      let response = await fetch(
        "https://api.hopae.app/v1/identities/mnemonic",
        {
          method: "GET",
          "Content-Type": "application/json",
        }
      );

      let json = await response.json();
      if (response.ok) {
        navigation.navigate("Mnemonic", {
          mnemonic: json.mnemonic,
          privateKey: json.privateKey,
        });
      }
    } catch (err) {
      Alert.alert(
        "경고",
        "Mnemonic 12 글자를 가져오는데 실패했습니다.",

        { text: "OK" }
      );
    }
  };
  if (!fontsLoaded) {
    return (
      <View>
        <AppLoading />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="rgba(0, 0, 0, 0)"
          translucent={true}
          networkActivityIndicatorVisible={true}
        />
        <View style={styles.topContainer}>
          <Image
            source={require("../assets/images/social.png")}
            resizeMode={"center"}
            style={styles.imageArea}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.titleArea}>
            <Text
              style={[styles.titleTxt, { fontFamily: "TitilliumWeb_700Bold" }]}
              adjustsFontSizeToFit={true}
            >
              Simple But Safe !
            </Text>
          </View>
          <View style={styles.textArea}>
            <Text
              style={[
                styles.textTxt,
                { fontFamily: "TitilliumWeb_400Regular" },
              ]}
              adjustsFontSizeToFit={true}
            >
              요청받은 정보만 직접 선택해서 전달하는
            </Text>
            <Text
              style={[
                styles.textTxt,
                { fontFamily: "TitilliumWeb_400Regular" },
              ]}
              adjustsFontSizeToFit={true}
            >
              안전하고 깔끔한 HOPAE Life
            </Text>
            <Text
              style={[
                styles.textTxt,
                { fontFamily: "TitilliumWeb_400Regular" },
              ]}
              adjustsFontSizeToFit={true}
            >
              지금부터 시작해보세요
            </Text>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => requestMnemonic()}
            >
              <Text
                style={[
                  styles.btnTxt,
                  { fontFamily: "TitilliumWeb_400Regular" },
                ]}
                adjustsFontSizeToFit={true}
              >
                START
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1F9",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 39,
    paddingBottom: 39,
  },
  imageArea: {
    flex: 1,
    width: width * 0.61,
    aspectRatio: 1,
  },
  bottomContainer: {
    flex: 1.5,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  titleArea: {
    marginBottom: 76,
  },
  titleTxt: {
    color: "#0D1F3C",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
  },
  textArea: {
    marginBottom: 96,
  },
  textTxt: {
    color: "#485063",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
  },
  startBtn: {
    width: 200,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#347AF0",
    padding: 13,
    paddingTop: 11,
    paddingBottom: 11,
  },
  btnTxt: {
    color: "#347AF0",
    fontSize: 19,
    fontWeight: "600",
  },
});
export default HomeScreen;
