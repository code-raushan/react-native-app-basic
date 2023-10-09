import { View, StyleSheet} from 'react-native'
import CourseList from '../components/CourseList';
export default function CommunityCourse({ route }) {
  const { communityCourses }: { communityCourses: Course[] } = route.params;
  return (
    <View style={styles.container}>
     <CourseList courseList={communityCourses} />
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