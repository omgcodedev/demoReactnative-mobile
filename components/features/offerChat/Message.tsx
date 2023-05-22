import { StyleSheet, View, Text, Image } from "react-native";
import RightRectangle from "../../../assets/icons/rightRectangle.svg";
import LeftRectangle from "../../../assets/icons/leftRectangle.svg";

export type UserInfo = {
  id: number;
  picture: string;
  name: string;
};

interface MessageProps {
  text: string;
  time: string;
  isMine: boolean;
  userInfo: UserInfo;
}

const Message = ({
  text,
  isMine,
  userInfo,
  time,
}: MessageProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {!isMine && <LeftRectangle />}
      <View style={isMine ? styles.me : styles.companion}>
        <View
          style={
            isMine
              ? styles.info
              : [styles.info, { flexDirection: "row-reverse", marginBottom: 5 }]
          }
        >
          <Text
            style={
              isMine
                ? styles.date
                : [styles.date, { color: "rgba(0, 0, 0, 0.4)" }]
            }
          >
            {time}
          </Text>
          <View
            style={
              isMine
                ? styles.userInfo
                : [styles.userInfo, { flexDirection: "row-reverse" }]
            }
          >
            <Text
              style={
                isMine
                  ? styles.userName
                  : [styles.userName, { color: "rgba(0, 0, 0, 0.4)" }]
              }
            >
              {userInfo.name ? userInfo.name : "unknown"}
            </Text>
            <Image
              style={
                isMine
                  ? styles.profilePicture
                  : [styles.profilePicture, { marginLeft: 0, marginRight: 5 }]
              }
              source={{ uri: userInfo.picture }}
            />
          </View>
        </View>
        <Text style={isMine ? [styles.text, { color: "#fff" }] : styles.text}>
          {text}
        </Text>
      </View>
      {isMine && <RightRectangle />}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  me: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#007AFF",
    flex: 1,
    height: "100%",
    borderRadius: 13,
    paddingLeft: 9,
    paddingRight: 14,
    marginLeft: 8,
    minHeight: 90,
    paddingVertical: 10,
  },
  companion: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#DCDCDC99",
    flex: 1,
    height: "100%",
    borderRadius: 13,
    marginLeft: -1,
    paddingLeft: 9,
    paddingRight: 14,
    marginRight: 8,
    minHeight: 90,
    paddingVertical: 13,
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    color: "#D6D6D6",
  },
  userInfo: {
    flexDirection: "row",
  },
  userName: {
    color: "#D6D6D6",
  },
  profilePicture: {
    width: 26,
    height: 20,
    marginLeft: 5,
  },
  text: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 14,
    color: "#333333",
    paddingTop: 10,
  },
});
