import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../contexts/authContext";
import { GlobalServices } from '../utils/services/service/globalServices';

import TabNavigator from "./tabNavigator";

const NavigationStack = (): JSX.Element => {
  return (
    <AuthProvider>
      <GlobalServices>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </GlobalServices>
    </AuthProvider>
  );
};

export default NavigationStack;
