import { createStackNavigator } from "@react-navigation/stack";
import SelectProvenancePro from "../../../screens/selectProvenancePro";
import ArtBaselDetail from "../../../screens/artBaselDetail";
import MyCollection from "../../../screens/myCollection";
import ArtBasel from "../../../screens/artBasel";
import Purchase from "../../../screens/purchase";
import Header from "../../../components/features/header";
import Home from "../../../screens/home";
import { Routes } from "../../routes";
import UserSettings from "../../../screens/userSettings";
import Connection from "../../../screens/connections";
import ProvenancePro from "../../../screens/provenancePro";

const Stack = createStackNavigator();

export const HomeStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen name={Routes.ART_BASEL} component={ArtBasel} />
      <Stack.Screen name={Routes.ART_BASEL_DETAIL} component={ArtBaselDetail} />
    </Stack.Navigator>
  );
};

export const CollectionNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.MY_COLLECTION}
        component={MyCollection}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name={Routes.PURCHASE}
        component={Purchase}
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
};

export const ConnectionsNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.CONNECTION}
        component={Connection}
        options={{
          header: () => <></>,
        }}
      />
      <Stack.Screen
        name={Routes.USER_SETTINGS}
        component={UserSettings}
        options={{
          header: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};
