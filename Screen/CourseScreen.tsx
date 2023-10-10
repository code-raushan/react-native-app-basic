import { View, Text, StyleSheet, Image } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OverviewScreen from "./CourseDetails/OverviewScreen";
import MentorScreen from "./CourseDetails/MentorScreen";
import GoBack from "../components/GoBack";

const Tab = createMaterialTopTabNavigator();


export default function CourseScreen({ route, navigation }) {
    const { item }: { item: Course } = route.params;
    navigation
    return (
        <View style={styles.container}>
            <View style={{paddingTop: 50, paddingBottom: 20, paddingLeft: 10, paddingRight: 20, display: "flex", flexDirection: "row", gap: 10, alignItems: "center"}}>
                <GoBack />
                <Text style={{color: "#fff", fontSize: 20}}>{item.title}</Text>
            </View>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <Image source={{ uri: `https://cdn.ineuron.ai/assets/uploads/thumbnails/${item.img}` }} style={{ height: 150, width: 300, marginBottom: 10, resizeMode: "contain", borderRadius: 10 }} />
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: "#111" },
                    tabBarInactiveTintColor: '#fff',
                    tabBarActiveTintColor: '#ff0000',                  
                }}
            >
                <Tab.Screen name="Overview"
                     component={OverviewScreen} 
                     initialParams={{ item }}                   
                />
                <Tab.Screen name="Mentor" component={MentorScreen} initialParams={{ item }} />
            </Tab.Navigator>
            <View style={{ height:50, margin: 8, display: "flex", backgroundColor: "#CD5C08", flexDirection: "row", justifyContent:"center", alignItems: "center", borderRadius: 10}}>
                <Text style={{color: "#fff"}}>Buy Now</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232D3F',
    },
});