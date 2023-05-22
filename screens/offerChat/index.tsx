import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Routes } from "../../navigation/routes";
import Chat from "../../components/features/offerChat/Chat";
import OfferCard from "../../components/features/offerChat/offerCard";
import { useTabNavigation } from "../../hooks/navigation";
import BackIcon from "../../assets/icons/backIcon.svg";
import StarIcon from "../../assets/icons/starIcon.svg";
import ClockIcon from "../../assets/icons/clockIcon.svg";
import CalendarIcon from "../../assets/icons/calendarIcon.svg";
import ZoomTitle from "../../assets/icons/zoom.svg";

const offers = [
  {
    title: "Countdown Clock Offer",
    icon: <ClockIcon />,
  },
  {
    title: "Schedule a Meeting",
    icon: <CalendarIcon />,
  },
  {
    title: "Accept",
    icon: <StarIcon />,
  },
  {
    title: "Zoom",
    icon: <ZoomTitle width={75} height={25} />,
  },
];

const OfferChat = () => {
  const navigation = useTabNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackIcon
          onPress={() => navigation.navigate(Routes.ART_BASEL_DETAIL)}
        />
        <Text style={styles.title}>Deal Room Chat</Text>
      </View>
      <View style={styles.offers}>
        {offers.map((offer, index: number) => (
          <OfferCard key={offer.title + index} {...offer} />
        ))}
      </View>
      <Chat />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    marginBottom: 340,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 27,
    marginBottom: 16,
  },
  offers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 90,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default OfferChat;
