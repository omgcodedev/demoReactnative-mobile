import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SvgProps } from "react-native-svg";

export type TabType = {
  title: string;
  icon: React.FC<SvgProps>;
};

type CommonTabsProps = {
  handleTabChange: React.Dispatch<React.SetStateAction<string>>;
  tabs: TabType[];
};

const CommonTabs: React.FC<CommonTabsProps> = ({ handleTabChange, tabs }) => {
  const [selectedTab, setSelectedTab] = useState(
    tabs.length ? tabs[0].title : ""
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        {tabs.map((props) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(props.title);
              handleTabChange(props.title);
            }}
            style={styles.tabs}
            key={props.title}
          >
            <props.icon
              color={selectedTab === props.title ? "#971E31" : "#111827"}
            />
            <Text
              style={
                selectedTab == props.title
                  ? [styles.tabTitle, styles.selected]
                  : styles.tabTitle
              }
            >
              {props.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRightWidth: 1,
    borderRightColor: "#e5e5e5",
    height: 44,
    backgroundColor: "#f8f8f8",
  },
  tabTitle: {
    fontSize: 12,
    color: "#111827",
    width: "50%",
    marginLeft: 6,
  },
  selected: {
    color: "#971E31",
  },
});

export default CommonTabs;
