import React from "react";
import { Calendar } from "react-native-calendars";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CalendarComponent(): JSX.Element {
  const today = new Date().toISOString().split("T")[0];
  const markedDates = {
    [today]: { selected: true, marked: false, selectedColor: "#971E31" },
  };

  const renderArrow = (direction: "left" | "right") => (
    <MaterialIcons
      name={`chevron-${direction}`}
      size={30}
      color={direction === "left" ? "#000000" : "#000000"} // set color based on arrow direction
    />
  );

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderHeader = (date: Date): JSX.Element => {
    const monthText = monthNames[date.getMonth()]; // returns "March"
    const yearText = date.getFullYear();
    return (
      <View style={styles.mainSection}>
        <Text style={styles.monthText}>{monthText}</Text>
        <Text style={styles.yearText}>{yearText}</Text>
      </View>
    );
  };
  return (
    <View style={{ padding: 20 }}>
      <Calendar
        markedDates={markedDates}
        renderArrow={renderArrow}
        renderHeader={renderHeader}
        firstDay={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainSection: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  monthText: {
    fontSize: 24,
    color: "#971E31",
    marginRight: 10,
  },
  yearText: {
    fontSize: 14,
    color: "#000000",
  },
});
