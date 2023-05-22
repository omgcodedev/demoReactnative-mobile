import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { Filters } from "./types";
import { UserConnectionProps } from "../../components/shared//userConnection/types";
import UserConnection from "../../components/shared/userConnection";
import Search from "../../assets/icons/search.svg";
import { axiosInstance } from "../../utils/services/service/axiosService";

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: "#ffffff",
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
  },
  flex: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchBar: {
    width: "90%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    padding: 16,
    borderRadius: 5,
    marginBottom: 16,
  },
  filterWrapper: {
    padding: 9,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  filterWrapperChosen: {
    color: "#89182A",
    fontWeight: "700",
    borderColor: "rgba(137, 24, 42, 0.12)",
    borderRadius: 5,
  },
});

const List = [Filters.ALL, Filters.FRIENDS, Filters.PROVIDERS, Filters.PROS];
const users = [
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@Vegan Street",
    surname: "Arlene McCoy",
    isPro: false,
    status: "provider",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@Tech Career",
    surname: "Jacob Jones",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@Evenline Fest",
    surname: "Brooklyn Simmons",
    isPro: false,
    status: "provider",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "friend",
    icon: require("../../assets/avatar.png"),
  },
  {
    userName: "@The Creative",
    surname: "Ralph Edwards",
    isPro: true,
    status: "provider",
    icon: require("../../assets/avatar.png"),
  },
];

const Connection = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [listFilter, setListFilter] = useState<Filters>(Filters.ALL);
  const [userList, setUserList] = useState<UserConnectionProps[]>([]);

  // Will be in use when user will have approp lists of connections
  // useEffect(() => {
  //   switch (listFilter) {
  //     case Filters.ALL:
  //       setUserList(findUser(users));
  //       break;
  //     case Filters.FRIENDS:
  //       const friendUsers = users.filter((value) => value.status === "friend");
  //       setUserList(findUser(friendUsers));
  //       break;
  //     case Filters.PROVIDERS:
  //       const providerUsers = users.filter(
  //         (value) => value.status === "provider"
  //       );
  //       setUserList(findUser(providerUsers));
  //       break;
  //     case Filters.PROS:
  //       const proUsers = users.filter((value) => value.isPro);
  //       setUserList(findUser(proUsers));
  //       break;
  //   }
  // }, [searchInput, listFilter]);

  const getUsers = async () => {
    const res = await axiosInstance.get(`/users/admin?limit=${0}&offset=${0}`);

    if (!!res.data.count) {
      setUserList(res.data.users);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ScrollView style={styles.screenBackground}>
      <View style={styles.container}>
        <View style={[styles.searchBar, styles.flex]}>
          <TextInput
            onChangeText={(e) => {
              setSearchInput(e);
            }}
            value={searchInput}
            placeholder="Search Name"
          />
          <Search width={20} height={20} />
        </View>
        <View style={[styles.flex, { width: "70%" }]}>
          {List.map((value, i) => (
            <TouchableOpacity
              key={value + i}
              style={[
                styles.filterWrapper,
                listFilter === value && styles.filterWrapperChosen,
              ]}
              onPress={() => {
                setListFilter(value);
              }}
            >
              <Text
                style={[
                  { color: "#9ca3af" },
                  listFilter === value && styles.filterWrapperChosen,
                ]}
              >
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          {userList.map((value, i) => (
            <UserConnection key={i} {...value} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Connection;
