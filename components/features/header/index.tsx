import { StyleSheet, View, Text } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import ProfilePic from "../../../assets/icons/profilePicExample.svg";
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import Plus from "../../../assets/icons/plus.svg";
import Message from "../../../assets/icons/message.svg";
import Bell from "../../../assets/icons/bell.svg";
import { useTabNavigation } from "../../../hooks/navigation";
import { Routes } from "../../../navigation/routes";
import { headerDropdown } from "../../../utils/dropdown";
import { ProfileOwner } from "../../pages/types/profile";
//  should be used latter

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#f3f3f3",
    backgroundColor: "#ffffff",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 30,
  },
  IconBorder: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#f3f3f3",
  },
  temp: {
    fontSize: 14,
  },
  containerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    margin: 10,
  },
  headerContainer: {
    padding: 20,
  },
  text: {
    marginLeft: 5,
  },
  popupContainer: {
    borderRadius: 20,
  },
  profilePicture: {
    marginRight: 15,
  },
});

const Header = (): JSX.Element => {
  const navigation = useTabNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Menu style={styles.popupContainer}>
          <MenuTrigger
            children={
              <View style={styles.iconContainer}>
                <ProfilePic style={styles.profilePicture}/>
                <ArrowDown />
              </View>
            }
          />
          <MenuOptions>
            {headerDropdown.map((e, index) => (
              <MenuOption
                onSelect={() => navigation.navigate(e.screen, e.screenArgs)}
                key={index}
                style={styles.containerHeader}
              >
                <Text style={styles.text}>{e.title}</Text>
                <View>{e.icon}</View>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>
      </View>
      <View style={[{ width: "40%" }, styles.iconContainer]}>
        <View style={styles.IconBorder}>
          <Plus />
        </View>
        <View
          style={styles.IconBorder}
          onTouchEnd={() => navigation.navigate(Routes.NOTIFICATIONS)}
        >
          <Bell />
        </View>
        <View style={styles.IconBorder}>
          <Message />
        </View>
      </View>
    </View>
  );
};

export default Header;
