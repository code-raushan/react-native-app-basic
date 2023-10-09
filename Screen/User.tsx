import { View, Text, StyleSheet} from "react-native"
export const User = ()=>{
    return (
        <View style={styles.container}>
            <Text style={
                {color: "#fff"}
            }>User</Text>
          </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0F0F0F',
      alignItems: 'center',
      justifyContent: 'center',
    },
});