import { Text, View, StyleSheet, ScrollView } from "react-native"
import ReadMore from "../../components/ReadMore";
function OverviewScreen({route}) {
    const {item}: {item: Course} = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={{paddingTop: 10}}>
        <ReadMore text={item.description} maxLength={100}/>
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
      paddingRight:20
  },
});



export default OverviewScreen