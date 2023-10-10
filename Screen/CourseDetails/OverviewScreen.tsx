import { Text, View, StyleSheet, ScrollView } from "react-native"
import ReadMore from "../../components/ReadMore";
import ClassTimings from "../../components/ClassTimings";
import IonIcons from 'react-native-vector-icons/Ionicons'
function OverviewScreen({ route }) {
  const { item }: { item: Course } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingTop: 10 }}>
        <ReadMore text={item.description} maxLength={100} />
      </View>
      {Object.keys(item.classTimings).length>0 && (
        <ClassTimings item={item}/>
      )}
      <View>
        <Text style={styles.mainTitle}>Course Features</Text>
      </View>


    </ScrollView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232D3F',
    alignContent: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
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


export default OverviewScreen