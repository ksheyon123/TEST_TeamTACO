import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Mnemonics from "../components/Mnemonics";
const { width, height } = Dimensions.get("window");

const MnemonicScreen = ({ route, navigation }) => {
  const { mnemonic, privateKey } = route.params;
  const [mnemonics, setMnemonics] = useState(mnemonic.split(" "));
  // The Mnemonic screen does not display any information related to the privateKey.
  // const [privateKeys, setPrivateKeys] = useState(privateKey);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerBackBtn}
        >
          <Text
            style={styles.headerTxt}
          >
            Back
          </Text>
        </TouchableOpacity>
      ),
      headerTitle: () => <View></View>,
      headerStyle: {
        elevation: 0,
        shadowOffset: {
          height: 0,
        },
      },
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleTxt}>Recovery Words</Text>
        <Text style={styles.subtitleTxt}>
          HOPAE의 복원, 백업 관리등에 사용되는 문구입니다.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        {mnemonics.map((mnemonic, index) => {
          return (
            <View style={styles.mnemonicArea} key={index.toString()}>
              <Text style={styles.mnemonicTxt}>{mnemonic}</Text>
            </View>
          );
        })}
      </View>
      {/* When the developer uses the mnemonic list repeatedly, use the component below  */}
      {/* <Mnemonics mnemonic={mnemonic}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerBackBtn: {
    padding: 16,
  },
  headerTxt : {
    color: "#007AFF",
    fontSize: 17,
    letterSpacing: -0.41,
    fontStyle: "normal",
  },
  container: {
    width: width,
    height: height,
    backgroundColor: "#ffffff",
  },
  topContainer: {
    paddingRight: 17,
    paddingLeft: 17,
  },
  titleTxt: {
    color: "#000000",
    fontStyle: "normal",
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: 0.41,
  },
  subtitleTxt: {
    color: "#828282",
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.41,
  },
  bottomContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 36,
    paddingRight: 17,
    paddingLeft: 17,
  },
  mnemonicArea: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
    marginRight: 9,
    marginBottom: 10,
  },
  mnemonicTxt : {
    fontSize : 14,
    fontStyle : "normal",
    fontWeight : "400",
    color : "#000000",
    letterSpacing : -0.165
  }
});

export default MnemonicScreen;
