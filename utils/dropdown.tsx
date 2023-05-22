import Profile from "../assets/icons/profile.svg";
import Favorites from "../assets/icons/starHeader.svg";
import Payment from "../assets/icons/dollar.svg";
import Settings from "../assets/icons/settingsHeader.svg";
import Info from "../assets/icons/info.svg";
import { Routes } from "../navigation/routes";
import { ProfileOwner } from "../components/pages/types/profile";

interface DropdownMenu {
  icon: JSX.Element;
  title: string;
  screen: any;
  screenArgs?: any;
}

export const headerDropdown: Array<DropdownMenu> = [
  {
    icon: <Profile />,
    title: "Profile",
    screen: Routes.PROFILE,
    screenArgs: { id: null, owner: ProfileOwner.CURRENT }
  },
  {
    icon: <Favorites />,
    title: "Favorites",
    screen: "",
    screenArgs: {},
  },
  {
    icon: <Payment />,
    title: "Payment",
    screen: "",
    screenArgs: {},
  },
  {
    icon: <Settings />,
    title: "Settings",
    screen: Routes.USER_SETTINGS,
    screenArgs: {},
  },
  {
    icon: <Info />,
    title: "About",
    screen: "",
    screenArgs: {},
  },
];
