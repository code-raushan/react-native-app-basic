import { Text, View, StyleSheet } from "react-native"
type Props = {}

function ProjectsScreen({ }: Props) {
    return (
        <View style={styles.container}></View>
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
  

export default ProjectsScreen