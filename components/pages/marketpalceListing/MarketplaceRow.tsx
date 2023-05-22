import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import RedCheck from "../../../assets/icons/redRoundCheck.svg";
import ReviewStar from "../../../assets/icons/reviewStar.svg";
import Controls from "./Controls";
import { MarketplaceRowType } from "../../../screens/servicesMarketplace";

const MarketplaceRow = ({ type, user }) => {
  const [isPro, setIsPro] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
        {type === MarketplaceRowType.MARKETPLACE && (
          <View style={styles.isOnlineDot} />
        )}
      </View>
      <View style={styles.userDataBox}>
        <View style={styles.userData}>
          <View style={styles.userNameBox}>
            <Text style={styles.userName}>{`${user.first_name}`}</Text>
            {isPro && <RedCheck />}
          </View>
          <View>
            <Text style={styles.position}>{user.position}</Text>
            <View style={styles.reviewBox}>
              <Text style={styles.position}>Reviews</Text>
              <View style={styles.starBox}>
                {[...Array(user.reviews)].map((e, i) => (
                  <ReviewStar key={i} style={styles.reviewStar} />
                ))}
              </View>
            </View>
          </View>
        </View>
        <Controls type={type} />
      </View>
    </View>
  );
};

export default MarketplaceRow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  userNameBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarBox: {
    position: "relative",
  },
  avatar: {
    height: 63,
    width: 63,
    borderRadius: 50,
    marginRight: 11,
  },
  isOnlineDot: {
    width: 8,
    height: 8,
    backgroundColor: "#05B714",
    borderRadius: 30,
    borderColor: "#FFFFFF",
    borderWidth: 1.5,
    position: "absolute",
    top: 10,
    left: 2,
  },
  userDataBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userData: {
    flexDirection: "column",
    display: "flex",
  },
  userName: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
    marginRight: 7,
    padding: 0,
  },
  position: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: "400",
    color: "#9CA3AF",
  },
  reviewBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  starBox: {
    flexDirection: "row",
  },
  reviewStar: {
    marginLeft: 5,
  },
});
