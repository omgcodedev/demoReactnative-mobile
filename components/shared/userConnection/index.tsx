import { StyleSheet, View, Text, Image } from "react-native";
import Message from "../../../assets/icons/message.svg";
import ProIcon from "../../../assets/icons/pro.svg";
import { useTabNavigation } from "../../../hooks/navigation";
import { Routes } from "../../../navigation/routes";

import { UserConnectionProps } from "./types";

const UserConnection = ({
  userName,
  fullName,
  avatar,
  isPro,
}: UserConnectionProps): JSX.Element => {
  const navigation = useTabNavigation();

  return (
    <View
      style={[styles.flex, styles.container]}
      onTouchEnd={() => navigation.navigate(Routes.PROFILE, {id: null, owner: "RANDOM"})}
    >
      <View style={styles.flex}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <View>
          <View style={styles.flex}>
            <Text style={styles.userName}>{`@${userName}`}</Text>
            {isPro && <ProIcon />}
          </View>
          <Text style={styles.fullName}>{fullName}</Text>
        </View>
      </View>
      <Message />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    width: "90%",
    marginVertical: 20,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontWeight: "700",
    marginBottom: 4,
    marginRight: 5,
  },
  fullName: {
    fontSize: 12,
    lineHeight: 24,
    color: "#9CA3AF",
  },
});

export default UserConnection;
