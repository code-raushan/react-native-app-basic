import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto'

export default function ClassTimings({item}){
    return(
        <View style={{ marginTop: 20 }}>
          <Text style={styles.mainTitle}>Class Details</Text>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20, marginBottom: 15 }}>
            <Icon name="date" color="#fff" size={25} />
            <View >
              <Text style={styles.textHeading}>Start Date:</Text>
              <Text style={styles.textDescription}>{item.classTimings.startDate}</Text>
            </View>

          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20, marginBottom: 15 }}>
            <Icon name="clock" color="#fff" size={25} />
            <View style={{ width: 200 }}>
              <Text style={styles.textHeading}>Class Timings: </Text>
              <Text style={styles.textDescription}>{item.classTimings.timings}</Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 25, marginBottom: 15 }}>
            <Icon name="question" color="#fff" size={25} />
            <View style={{ width: 200 }}>
              <Text style={styles.textHeading}>Doubt Session: </Text>
              <Text style={styles.textDescription}>{item.classTimings.doubtClearing}</Text>
            </View>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textHeading: {
      color: "#fff",
      fontWeight: "500"
    },
    textDescription: {
      color: "#fff",
      fontWeight: "200"
    },
    mainTitle: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 20,
      marginBottom: 10
    },
  });