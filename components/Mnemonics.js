import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const MnemonicScreen = ({ mnemonic }) => {
  const [mnemonics, setMnemonics] = useState(mnemonic.split(" "));
  return (
    <View style={styles.container}>
      {mnemonics.map((mnemonic, index) => {
        return (
          <View style={styles.mnemonicArea} key={index.toString()}>
            <Text style={styles.mnemonicTxt}>{mnemonic}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
