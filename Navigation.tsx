import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import CourseScreen from './Screen/CourseScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Home } from './components/Home';
import { Search } from './components/Search';
import { Play } from './components/Play';
import { User } from './components/User';


export default function Navigation() {

    const Stack = createNativeStackNavigator();

    function StackGroup() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='HomeGroup' component={TabGroup} />
                <Stack.Screen name='Course' component={CourseScreen} />
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
                            marginTop: 3,
                            marginBottom: 3,
                            marginLeft: 5,
                            marginRight: 5,
                            backgroundColor: "#110111",
                            borderRadius: 10
                        },

                    }}

                >
                    <Tab.Screen name="Home" options={{ tabBarIcon: ({ color, size }) => { return <Icon name='home' size={20} color={color} /> } }} component={Home} />
                    <Tab.Screen name="Search" options={{ tabBarIcon: ({ color, size }) => { return <Icon name='search' size={20} color={color} selectionColor={"#ff0000"} /> } }} component={Search} />
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