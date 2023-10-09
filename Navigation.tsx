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
                        headerStyle: {
                            backgroundColor: '#232D3F',
                            
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen 
                    name='AffordableCourse' 
                    component={AffordableCourse} 
                    options={{
                        presentation: "modal",
                        headerTitle: "Affordable Course",
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#232D3F',
                            
                        },
                        headerTintColor: '#fff',
                    
                    }}
                />
                <Stack.Screen 
                    name='CommunityCourse' 
                    component={CommunityCourse} 
                    options={{
                        presentation: "modal",
                        headerTitle: "Community Course",
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#232D3F',
                            
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen 
                    name='TestSeries' 
                    component={TestSeries} 
                    options={{
                        presentation: "modal",
                        headerTitle: "Test Series",
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#232D3F',
                            
                        },
                        headerTintColor: '#fff',

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
                }}

            >
                <Tab.Screen 
                    name="Home" 
                    options={{ tabBarIcon: ({ color, size, focused }) =><Icon name='home' size={20} color={color} style={{backgroundColor: focused && "#232D3F", padding: 4, borderRadius: 100}} /> } }
                    component={Home} 
                />
                <Tab.Screen 
                    name="Search" 
                    options={{ tabBarIcon: ({ color, focused }) => <Icon name='search' size={20} color={color} style={{backgroundColor: focused && "#232D3F", padding: 4, borderRadius: 100}} /> } }
                    component={Search} 
                />
                <Tab.Screen 
                    name="Play" 
                    options={{ tabBarIcon: ({ color, focused }) =><Icon name='play-circle' size={20} color={color} style={{backgroundColor: focused && "#232D3F", padding: 6, borderRadius: 100}} /> } }
                    component={Play} 
                />
                <Tab.Screen 
                    name="User" 
                    options={{ tabBarIcon: ({ color, focused }) =><Icon name='user-circle' size={20} color={color} style={{backgroundColor: focused && "#232D3F", padding: 4, borderRadius: 100}} /> } }
                    component={User} 
                />
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