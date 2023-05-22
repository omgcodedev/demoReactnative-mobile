import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import ExploreEvent from "../../components/features/exploreEvent";
import Filters from "../../assets/icons/filter.svg";
import CalendarComponent from "../../components/shared/calendar";

const filterList = [
  "Art,Fashion",
  "France",
  "2023",
  "testfilter",
  "anotherfilter",
];

const testData = [
  {
    icon: require("../../assets/cartier.png"),
    title: "Paris Photo",
    date: "February  10-15, 2023",
    location: "Paris , France",
  },
  {
    icon: require("../../assets/cartier.png"),
    title: "Paid Sponsor",

    location: "Paris , France",
  },
  {
    icon: require("../../assets/cartier.png"),
    title: "Gagosian Gallery Anslem Kiefer Exodus",
    date: "February  13-17, 2023",
    location: "Paris , France",
  },
  {
    icon: require("../../assets/cartier.png"),
    title: "Paris fashion week",
    date: "February  10-15, 2023",
    location: "Paris , France",
  },
];

enum FilterLists {
  LISTS = "Lists",
  CALENDAR = "Calendar",
}

const ExploreLists = () => {
  const [filters, setFilters] = useState<number>(3);
  const [listFilters, setListFilters] = useState<FilterLists>(
    FilterLists.LISTS
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.flex, styles.filterContainer]}>
          <View style={[styles.flex, { width: "25%" }]}>
            <Filters />
            <Text style={styles.filterTitle}>Filters</Text>
          </View>
          <View style={[styles.flex, { width: "70%" }]}>
            {filters !== 3 && (
              <Pressable
                style={styles.filterWrapper}
                onPress={() => {
                  setFilters(filters - 3);
                }}
              >
                <Text style={styles.filter}>...</Text>
              </Pressable>
            )}
            {filterList.map(
              (value, index) =>
                index < filters &&
                index >= filters - 3 && (
                  <Pressable style={styles.filterWrapper} key={value + index}>
                    <Text style={styles.filter}>{value}</Text>
                  </Pressable>
                )
            )}
            {filterList.length > 3 && filterList.length > filters && (
              <Pressable
                style={styles.filterWrapper}
                onPress={() => {
                  setFilters(filters + 3);
                }}
              >
                <Text style={styles.filter}>...</Text>
              </Pressable>
            )}
          </View>
        </View>
        <View style={[styles.flex, styles.listFiltersContainer]}>
          <Pressable
            style={[
              styles.listFilter,
              listFilters === FilterLists.LISTS && styles.listFilterActive,
            ]}
            onPress={() => {
              setListFilters(FilterLists.LISTS);
            }}
          >
            <Text
              style={
                listFilters === FilterLists.LISTS
                  ? styles.listFilterTextActive
                  : styles.listFilterText
              }
            >
              {FilterLists.LISTS}
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.listFilter,
              listFilters === FilterLists.CALENDAR && styles.listFilterActive,
            ]}
            onPress={() => {
              setListFilters(FilterLists.CALENDAR);
            }}
          >
            <Text
              style={
                listFilters === FilterLists.CALENDAR
                  ? styles.listFilterTextActive
                  : styles.listFilterText
              }
            >
              {FilterLists.CALENDAR}
            </Text>
          </Pressable>
        </View>
        {listFilters === FilterLists.CALENDAR && <CalendarComponent />}
        {testData.map((value) => (
          <ExploreEvent key={value.title} {...value} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ExploreLists;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterContainer: {
    paddingHorizontal: 10,
    paddingVertical: 16,
  },

  filterTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  filterWrapper: {
    backgroundColor: "#f8f8f8",
    borderRadius: 30,
  },
  filter: {
    fontSize: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  listFiltersContainer: {
    justifyContent: "center",
    paddingBottom: 16,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#f3f3f3",
  },
  listFilter: {
    paddingHorizontal: 25,
    paddingVertical: 9,
    borderRadius: 5,
  },
  listFilterActive: {
    borderColor: "rgba(137, 24, 42, 0.12)",
    borderStyle: "solid",
    borderWidth: 1,
  },
  listFilterText: {
    fontSize: 12,
    color: "#9ca3af",
  },
  listFilterTextActive: {
    fontSize: 12,
    fontWeight: "700",
    color: "#971e31",
  },
});
