import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import BackIcon from "../../assets/icons/backIcon.svg";
import Input from "../../components/shared/input";
import { useTabNavigation } from "../../hooks/navigation";
import { Routes } from "../../navigation/routes";

export default function ConfirmOffer(): JSX.Element {
  const navigation = useTabNavigation();
  const route = useRoute();
  //@ts-ignore
  const price = route?.params?.price;

  return (
    <View>
      <View style={styles.header}>
        <BackIcon onPress={() => navigation.navigate(Routes.OFFER_CHAT)} />
        <Text style={styles.title}>Deal Room Chat</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>
          Are you ready to accept the offer of ${price}?
        </Text>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.buttonConfirm}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonReject}>
            <Text style={styles.buttonTextReject}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  buttonReject: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 11,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 32,
    minWidth: 150,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 27,
  },
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    rowGap: "20px",
    width: "100%",
    justifyContent: "center",
  },
  header: {
    padding: 20,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonConfirm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 11,
    backgroundColor: "#8A182A",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 32,
    minWidth: 150,
    marginRight: 20,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  buttonTextReject: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
});
