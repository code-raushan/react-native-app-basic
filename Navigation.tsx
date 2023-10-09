import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import CourseScreen from './Screen/CourseScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Home } from './Screen/Home';
import { Search } from './Screen/Search';
import { Play } from './Screen/Play';
import { User } from './Screen/User';
import LiveCourse from './Screen/LiveCourse';
import AffordableCourse from './Screen/AffordableCourse';
import CommunityCourse from './Screen/CommunityCourse';
import TestSeries from './Screen/TestSeries';


export default function Navigation() {

    const Stack = createNativeStackNavigator();

    function StackGroup() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='HomeGroup' component={TabGroup} />
                <Stack.Screen 
                    name='LiveCourse' 
                    component={LiveCourse}
                    options={{
                        presentation: "modal",
                        headerTitle: "Live Course",
                        headerShown: true,
                    }}
                />
                <Stack.Screen 
                    name='AffordableCourse' 
                    component={AffordableCourse} 
                    options={{
                        presentation: "modal",
                        headerTitle: "Affordable Course",
                        headerShown: true,
                    
                    }}
                />
                <Stack.Screen 
                    name='CommunityCourse' 
                    component={CommunityCourse} 
                    options={{
                        presentation: "modal",
                        headerTitle: "Community Course",
                        headerShown: true,
                    }}
                />
                <Stack.Screen 
                    name='TestSeries' 
                    component={TestSeries} 
                    options={{
                        presentation: "modal",
                        headerTitle: "Test Series",
                        headerShown: true,
                    }}
                />
                <Stack.Screen 
                    name='Course' 
                    component={CourseScreen} 
                />
            </Stack.Navigator>
        )
    }

    const Tab = createBottomTabNavigator();

    function TabGroup() {
        return (
            <Tab.Navigator
                detachInactiveScreens
                screenOptions={{
                    tabBarInactiveTintColor: '#fff',
                    tabBarActiveTintColor: '#ff0000',
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#111",
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                    tabBarShowLabel: false,
                    tabBarItemStyle: {

                    },
                }}

            >
                <Tab.Screen name="Home" options={{ tabBarIcon: ({ color, size, focused }) => { return <Icon name='home' size={20} color={color} /> } }} component={Home} />
                <Tab.Screen name="Search" options={{ tabBarIcon: ({ color, size }) => { return <Icon name='search' size={20} color={color}/> } }} component={Search} />
                <Tab.Screen name="Play" options={{ tabBarIcon: ({ color, size }) => { return <Icon name='play' size={20} color={color} /> } }} component={Play} />
                <Tab.Screen name="User" options={{ tabBarIcon: ({ color, size }) => { return <Icon name='user' size={20} color={color} /> } }} component={User} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <StatusBar backgroundColor='#111' style='light' />
            <StackGroup />
        </NavigationContainer>
    )
}