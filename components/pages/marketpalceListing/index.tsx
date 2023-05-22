import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { marketplaceUsers as users } from "../../../MOCK_DATA";
// Components
import MarketplaceRow from "./MarketplaceRow";

const MarketpalceListing = () => {
  const route = useRoute();
  const [type, setType] = useState<string>();

  useEffect(() => {
    setType(route.params["type"]);
  }, [route]);

  return (
    <ScrollView>
      {users.map((user, i) => (
        <MarketplaceRow key={i} user={user} type={type} />
      ))}
    </ScrollView>
  );
};

export default MarketpalceListing;
