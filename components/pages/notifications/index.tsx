import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Notification from "../../shared/notification";
import { notifications as dummy_data } from "../../../MOCK_DATA";

const Notifications = () => {
  const [newNotifications, setNewNotifications] = useState<any[]>([]); // Create notification DataType when there is a data
  const [weekNotifications, setWeekNotifications] = useState<any[]>([]); // Week notifications list is not validated by date

  useEffect(() => {
    dummy_data.forEach((not) =>
      isWithinLast24Hours(not)
        ? setNewNotifications((prev) => [...prev, not])
        : setWeekNotifications((prev) => [...prev, not])
    );
  }, [dummy_data]);

  const isWithinLast24Hours = (data) => {
    const twentyFourHoursInMs = 24 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();
    const targetTime = new Date(+data.created).getTime();
    return currentTime - targetTime <= twentyFourHoursInMs;
  };

  return (
    <ScrollView>
      <View style={styles.notificationsContainer}>
        <View style={styles.notificationList}>
          <Text style={styles.datingText}>New</Text>
          {newNotifications.map((note) => (
            <Notification key={note.id} data={note} />
          ))}
        </View>
        <View style={styles.notificationList}>
          <Text style={styles.datingText}>This Week</Text>
          {weekNotifications.map((note) => (
            <Notification key={note.id} data={note} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notificationsContainer: {
    backgroundColor: "white",
  },
  notificationList: {},
  datingText: {
    fontFamily: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    paddingLeft: 20,
    paddingVertical: 14,
  },
});

export default Notifications;
