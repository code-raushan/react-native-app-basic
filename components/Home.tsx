import { View, Text, StyleSheet} from "react-native"
export const Home = ()=>{
    return (
        <View style={styles.container}>
            <Text style={
                {color: "#fff"}
            }>Home</Text>
          </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#192A56',
      alignItems: 'center',
      justifyContent: 'center',
    },
});