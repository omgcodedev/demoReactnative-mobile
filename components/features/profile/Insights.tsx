import { StyleSheet, Text, View } from "react-native";

export type InsightProps = {
  count: number;
  title: string;
};

const Insight: React.FC<InsightProps> = ({ count, title }) => {
  return (
    <View style={styles.container}>
      {!!count && <Text style={styles.count}>{count}</Text>}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 16,
    width: 64,
  },
  count: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 4,
    color: "#324068"
  },
  title: {
    fontSize: 12,
    fontWeight: "400",
    color: "#9CA3AF",
  },
});

export default Insight;
