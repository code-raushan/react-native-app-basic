import { Text, StyleSheet, View } from "react-native"
type Props = {}

function MentorScreen({}: Props) {
  return (
    <View style={styles.container}></View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#232D3F',
      alignContent: "center",
      paddingLeft: 20,
      paddingRight:20
  },
});

export default MentorScreen