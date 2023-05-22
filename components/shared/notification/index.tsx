import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const NotificationItem = ({ data }) => {
  const [weekDay, setWeekDay] = useState<string>("");
  const [dayTime, setDayTime] = useState<string>("");
  const [amPm, setAmPm] = useState<string>("");

  const [read, setRead ] = useState<boolean>(false)

  useEffect(() => {
    getTimeData(+data.created);
  }, []);

  const getTimeData = (created) => {
    const date = new Date(created);

    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][date.getDay()];
    const hours = date.getHours();
    let minutes = date.getMinutes().toString();
    minutes = +minutes / 10 < 1 ? `0${minutes}` : minutes;

    setWeekDay(weekday);
    setDayTime(`${hours % 12}:${minutes}`);
    setAmPm(hours >= 12 ? "PM" : "AM");
  };

  return (
    <View style={[styles.notificationItem, read? styles.unread: undefined]}>
      <View style={styles.postImageContainer} >
        {read && <View style={styles.redDote} />}
        <Image style={styles.postImage} source={{ uri: data.avatar }}></Image>
      </View>
      <View style={styles.notifData}>
        <Text style={styles.notifText}>{data.content}</Text>
        <Text style={styles.notifDate}>{`${weekDay} ${dayTime} ${amPm}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    padding: 22,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    flexDirection: "row",
  },
  unread: {
    backgroundColor: "#FFF9FA",
  },
  notifData: {
    width: "75%",
  },
  notifText: {
    fontFamily: "Noto Sans JP",
    fontWeight: "500",
    fontSize: 14,
    text: "#333333",
    maxHeight: 35,
    marginBottom: 10,
  },
  notifDate: {
    fontFamily: "Noto Sans JP",
    fontWeight: "400",
    fontSize: 12,
    text: "#AAAAAA",
  },
  postImageContainer: {
    width: 55,
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  postImage: {
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  redDote: {
    borderRadius: 20,
    width: 10,
    height: 10,
    backgroundColor: "#89182A"
  },
});

export default NotificationItem;
