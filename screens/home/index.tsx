import { ScrollView, View, Text, StyleSheet } from "react-native";
import EventCard from "../../components/features/eventCard";
import SocialFeed from "../../components/features/socialFeed";
import { useStackNavigation } from "../../hooks/navigation";
import { Routes } from "../../navigation/routes";

const globalEventsData = [
  {
    mainText: "Art Basel: 2022",
    secondaryText: "Miami Dec 5-10",
    locationText: "Miami Beach, Florida",
    dateText: "2 DAYS AGO",
    photoUrl: "../../../assets/ArtBaselCard.png",
  },
  {
    mainText: "Golden Palace: 2020",
    secondaryText: "Caxkadzor Dec 5-10",
    locationText: "Caxkadzor Beach, Kotayk",
    dateText: "5 DAYS AGO",
    photoUrl: "../../../assets/ArtBaselCard.png",
  },
];

const socialFeedsData = [
  {
    mainText: "Joe an Chad Just connected at Art Basel, Miami",
    isVerified: true,
    photoUrl: "",
  },
  {
    mainText: "Emilia is attending in person the Armory Show, New York",
    isVerified: false,
    photoUrl: "",
  },
  {
    mainText: "Richard hired 3 Art Handlers in London",
    isVerified: true,
    photoUrl: "",
  },
];

const Home = () => {
  const navigation = useStackNavigation();
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Global Events</Text>
          <Text
            onPress={() => navigation.navigate(Routes.ART_BASEL)}
            style={styles.secondaryText}
          >
            View All
          </Text>
        </View>
        <View style={styles.eventCardContainer}>
          {globalEventsData.map((data, index) => (
            <View
              key={index}
              style={styles.eventCard}
              onTouchEnd={() => navigation.navigate(Routes.ART_BASEL)}
            >
              <EventCard
                mainText={data.mainText}
                secondaryText={data.secondaryText}
                locationText={data.locationText}
                dateText={data.dateText}
                photoUrl={data.photoUrl}
              />
            </View>
          ))}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Social Feeds</Text>
          <Text
            onPress={() => navigation.navigate(Routes.ART_BASEL)}
            style={styles.secondaryText}
          >
            More
          </Text>
        </View>
        <View>
          {socialFeedsData.map((data, index) => (
            <View key={data.mainText + index} style={styles.socialFeedContainer}>
              <SocialFeed
                mainText={data.mainText}
                isVerified={data.isVerified}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  mainText: {
    // fontFamily: 'Noto Sans JP',
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 30,
    color: "#000000",
  },
  secondaryText: {
    // fontFamily: 'Noto Sans JP',
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "#2e80fd",
    marginLeft: 8,
  },
  eventCardContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  eventCard: {
    marginRight: 20,
  },
  socialFeedContainer: {
    marginBottom: 20,
  },
});
