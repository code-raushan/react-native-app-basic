import { View, StyleSheet} from "react-native";
import CourseList from "../components/CourseList";

export default function LiveCourse({route}) {
    const {liveCourses}: {liveCourses: Course[]} = route.params;
    return (
        <View style={styles.container}>
            <CourseList courseList={liveCourses} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232D3F',
        padding: 10,
        alignContent: "center"

    },
});