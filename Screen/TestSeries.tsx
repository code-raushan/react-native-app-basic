import { View, StyleSheet} from 'react-native'
import CourseList from '../components/CourseList';
type Props = {}

export default function TestSeries({route}) {
  const {testSeries}: {testSeries:Course[]} = route.params;
  return (
    <View style={styles.container}>
      <CourseList courseList={testSeries}/>
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