import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.footer}>
      <View style={styles.contentFooter}>
        <Text style={styles.titleFooter}>Information</Text>
        <Text style={styles.subTitleFooter}>
          Monday to Friday. 10am - 21pm. - Saturdays. 10am - 17pm. - Fair. 10am
          - 15pm.
        </Text>
      </View>

      <View style={styles.contentFooter}>
        <Text style={styles.titleFooter}>
          ✈ Land your feet at your next destination ✈
        </Text>
        <Text style={styles.subTitleFooter}>Phone : 0800-824-1784</Text>
      </View>

      <View style={styles.contentFooter}>
        <Text style={styles.titleFooter}>Methods of payment</Text>
        <Text style={styles.subTitleFooter}>Debit - Credit - Transfer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 230,
    backgroundColor: "black",
  },
  contentFooter: {
    width: "100%",
  },
  titleFooter: {
    textDecorationLine: "underline",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    margin: 10,
  },
  subTitleFooter: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    margin: 5,
  },
});
