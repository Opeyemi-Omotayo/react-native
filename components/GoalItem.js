import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
