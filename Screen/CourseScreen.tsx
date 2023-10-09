import { View, Text, StyleSheet, Image } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OverviewScreen from "./CourseDetails/OverviewScreen";
import CurriculumScreen from "./CourseDetails/CurriculumScreen";
import ProjectsScreen from "./CourseDetails/ProjectsScreen";
import MentorScreen from "./CourseDetails/MentorScreen";

const Tab = createMaterialTopTabNavigator();


export default function CourseScreen({route}){
    const {item}:{item:Course} = route.params;

    return(
        <View style={styles.container}>
            <Image source={{uri: `https://cdn.ineuron.ai/assets/uploads/thumbnails/${item.img}`}} style={{height: 170, resizeMode: "contain"}}/>
            <Tab.Navigator>
                <Tab.Screen name="Overview" component={OverviewScreen} />
                <Tab.Screen name="Mentor" component={MentorScreen} />

            </Tab.Navigator>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232D3F',
    },
});