import React from 'react'
import { View, StyleSheet } from 'react-native'
import CourseList from '../components/CourseList';
type Props = {}

export default function AffordableCourse({route}) {
    const {affordableCourses}: {affordableCourses: Course[]} = route.params;
    return (
        <View style={styles.container}>
            <CourseList courseList={affordableCourses} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232D3F',
        padding: 20,
        alignContent: "center"  
    },
});