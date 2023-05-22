import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "../routes";
import {
  HomeStackNavigator,
  CollectionNavigator,
  ConnectionsNavigator,
} from "./homeStackNavigator";
import Login from "../../screens/login";
import Connection from "../../screens/connections";
import ExploreLists from "../../screens/exploreLists";
import RecoverPassword from "../../screens/recoverPassword";
import ServicesMarketplace from "../../screens/servicesMarketplace";
import FooterElement from "../../components/shared/footerElement";
import Header from "../../components/features/header";
import Group from "../../assets/icons/group.svg";
import HomeIcon from "../../assets/icons/home.svg";
import Search from "../../assets/icons/search.svg";
import Purchase from "../../assets/icons/purchases.svg";
import Collection from "../../assets/icons/collection.svg";
import GoBackIcon from "../../assets/icons/Go_Back.svg";
import Xicon from "../../assets/icons/xIcon.svg";
import Signup from "../../screens/signup";
import { useTabNavigation } from "../../hooks/navigation";
import { AuthContext } from "../../contexts/authContext";
import Profile from "../../components/pages/profile";
import EditProfile from "../../components/pages/profile/EditProfile";
import Notifications from "../../components/pages/notifications";
import UserSettings from "../../screens/userSettings";
import { ProfileOwner } from "../../components/pages/types/profile";
import SelectProvenancePro from "../../screens/selectProvenancePro";
import ProvenancePro from "../../screens/provenancePro";
import CodeVerification from "../../screens/codeVerificationScreen";
import ForgotPassword from "../../components/features/newPassword";
import OfferChat from "../../screens/offerChat";
import NewOffer from "../../screens/newOffer";
import ConfirmOffer from "../../screens/confirmOffer";
import ChangeEmail from "../../components/pages/changeEmail";
import ChangePassword from "../../components/pages/changePassword";
import MarketpalceListing from "../../components/pages/marketpalceListing";

const Tab = createBottomTabNavigator();

const TabNavigator = (): JSX.Element => {
  const { authenticated } = useContext(AuthContext);
  const navigation = useTabNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case Routes.HOME_STACK:
              return (
                <FooterElement showTitle={focused} title={"Home"}>
                  <HomeIcon
                    fill={"currentColor"}
                    color={focused ? "#8A182A" : "#BDC1CB"}
                  />
                </FooterElement>
              );
            case Routes.SERVICE_MARKETPLACE:
              return (
                <FooterElement
                  showTitle={focused}
                  title={"Services Marketplace"}
                >
                  <Collection
                    fill={"currentColor"}
                    color={focused ? "#8A182A" : "#BDC1CB"}
                  />
                </FooterElement>
              );
            case Routes.CONNECTION:
              return (
                <FooterElement showTitle={focused} title={"Connections"}>
                  <Group
                    fill={"currentColor"}
                    color={focused ? "#8A182A" : "#BDC1CB"}
                  />
                </FooterElement>
              );
            case Routes.EXPLORE_LISTS:
              return (
                <FooterElement showTitle={focused} title={"Explore"}>
                  <Search
                    fill={"currentColor"}
                    color={focused ? "#8A182A" : "#BDC1CB"}
                  />
                </FooterElement>
              );
            case Routes.COLLECTIONS:
              return (
                <FooterElement showTitle={focused} title={"Curate"}>
                  <Purchase
                    fill={"currentColor"}
                    color={focused ? "#8A182A" : "#BDC1CB"}
                  />
                </FooterElement>
              );
            case Routes.PROFILE:
              return (
                <FooterElement showTitle={focused} title={"Profile"}>
                  <Profile />
                </FooterElement>
              );
            case Routes.EDIT_PROFILE:
              return (
                <FooterElement showTitle={focused} title={"Edit Profile"}>
                  <EditProfile />
                </FooterElement>
              );
            case Routes.USER_SETTINGS:
              return (
                <FooterElement showTitle={focused} title={"UserSettings"}>
                  <UserSettings />
                </FooterElement>
              );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },
      })}
    >
      {authenticated ? (
        <>
          <Tab.Screen
            name={Routes.HOME_STACK}
            component={HomeStackNavigator}
            options={{
              header: () => <Header />,
            }}
          />
          <Tab.Screen
            name={Routes.EXPLORE_LISTS}
            component={ExploreLists}
            options={{
              header: () => <Header />,
            }}
          />
          <Tab.Screen
            name={Routes.COLLECTIONS}
            component={CollectionNavigator}
            options={{
              header: () => <></>,
            }}
          />
          <Tab.Screen
            name={Routes.CONNECTION}
            component={ConnectionsNavigator}
            options={{
              header: () => <Header />,
            }}
          />
          <Tab.Screen
            name={Routes.SERVICE_MARKETPLACE}
            component={ServicesMarketplace}
            options={{
              header: () => <Header />,
            }}
          />
          <Tab.Screen
            name={Routes.PROFILE}
            component={Profile}
            options={{
              header: () => <Header />,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={Routes.USER_SETTINGS}
            component={UserSettings}
            options={{
              header: () => <Header />,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={Routes.SELECT_PROVENANCE_PRO}
            component={MarketpalceListing}
            options={{
              tabBarButton: () => null,
              header: () => (
                <View style={styles.marketplaceHeader}>
                  <View
                    style={styles.marketplaceCloseIcon}
                    onTouchEnd={() =>
                      navigation.navigate(Routes.SERVICE_MARKETPLACE)
                    }
                  >
                    <GoBackIcon />
                  </View>
                  <View style={styles.marketPlaceTitleBox}>
                    <Text style={styles.marketPlaceTitle}>
                      Select a Provenance Pro
                    </Text>
                  </View>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name={Routes.SELECT_SERVICE_MARKETPLACE}
            component={MarketpalceListing}
            options={{
              tabBarButton: () => null,
              header: () => (
                <View style={styles.marketplaceHeader}>
                  <View
                    style={styles.marketplaceCloseIcon}
                    onTouchEnd={() =>
                      navigation.navigate(Routes.SERVICE_MARKETPLACE)
                    }
                  >
                    <GoBackIcon />
                  </View>
                  <View style={styles.marketPlaceTitleBox}>
                    <Text style={styles.marketPlaceTitle}>
                      Services Marketplace
                    </Text>
                  </View>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name={Routes.OFFER_CHAT}
            component={OfferChat}
            options={{
              header: () => <></>,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={Routes.NEW_OFFER}
            component={NewOffer}
            options={{
              header: () => <></>,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={Routes.CONFIRM_OFFER}
            component={ConfirmOffer}
            options={{
              header: () => <></>,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={Routes.CHANGE_EMAIL}
            component={ChangeEmail}
            options={{
              header: () => <Header />,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={Routes.CHANGE_PASS}
            component={ChangePassword}
            options={{
              header: () => <Header />,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={Routes.EDIT_PROFILE}
            component={EditProfile}
            options={{
              tabBarButton: () => null,
              headerTitleAlign: "left",
              headerLeft: () => (
                <View
                  style={styles.closeNotificationsIcon}
                  onTouchEnd={() =>
                    navigation.navigate(Routes.PROFILE, {
                      id: null,
                      owner: ProfileOwner.CURRENT,
                    })
                  }
                >
                  <GoBackIcon />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name={Routes.NOTIFICATIONS}
            component={Notifications}
            options={{
              headerTitleAlign: "left",
              headerLeft: () => (
                <View
                  style={styles.closeNotificationsIcon}
                  onTouchEnd={() => navigation.goBack()}
                >
                  <Xicon fill={"currentColor"} color={"#BDC1CB"} />
                </View>
              ),
              tabBarButton: () => null,
              headerTitleStyle: { fontWeight: "700", fontSize: 20 },
              headerRight: () => (
                <Text style={styles.markAsRead}>Mark all as read</Text>
              ),
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name={Routes.LOGIN}
            component={Login}
            options={{ tabBarStyle: { display: "none" }, header: () => null }}
          />
          <Tab.Screen
            name={Routes.SIGNUP}
            component={Signup}
            options={{ tabBarStyle: { display: "none" }, header: () => null }}
          />
          <Tab.Screen
            name={Routes.RECOVER_PASSWORD}
            component={RecoverPassword}
            options={{ tabBarStyle: { display: "none" }, header: () => null }}
          />
          <Tab.Screen
            name={Routes.CODE_VALIDATION}
            component={CodeVerification}
            options={{ tabBarStyle: { display: "none" }, header: () => null }}
          />
          <Tab.Screen
            name={Routes.NEW_PASSWORD}
            component={ForgotPassword}
            options={{ tabBarStyle: { display: "none" }, header: () => null }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  closeNotificationsIcon: {
    marginLeft: 20,
  },
  markAsRead: {
    color: "#2E80FD",
    fontWeight: "500",
    fontSize: 12,
    marginRight: 20,
  },
  marketplaceHeader: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  marketplaceCloseIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  marketPlaceTitle: {
    fontSize: 18,
    lineHeight: 24,
    marginRight: 20,
    fontWeight: "700",
  },
  marketPlaceTitleBox: {
    justifyContent: "center",
  },
});

export default TabNavigator;
