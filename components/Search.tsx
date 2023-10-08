import { View, Text, StyleSheet} from "react-native"

export const Search = () => {

    return (
        <View style={styles.container}>
            <Text style={
                { color: "#fff" }
            }>Search</Text>

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