import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import course1 from '../assets/course1.webp'
import course3 from '../assets/course3.webp'

export const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{ color: '#fff', marginTop: 20, marginBottom: 10 }}>Course Programs</Text>
                <Text style={{ color: '#ff0000', marginTop: 20, marginBottom: 10 }}>See More</Text>
            </View>
            
            <ScrollView horizontal={true}>
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
            </ScrollView>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{ color: '#fff', marginTop: 20, marginBottom: 10 }}>Course Programs</Text>
                <Text style={{ color: '#ff0000', marginTop: 20, marginBottom: 10 }}>See More</Text>

            </View>
            
            <ScrollView horizontal={true}>
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
            </ScrollView><View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{ color: '#fff', marginTop: 20, marginBottom: 10 }}>Course Programs</Text>
                <Text style={{ color: '#ff0000', marginTop: 20, marginBottom: 10 }}>See More</Text>

            </View>
            
            <ScrollView horizontal={true}>
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
            </ScrollView><View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{ color: '#fff', marginTop: 20, marginBottom: 10 }}>Course Programs</Text>
                <Text style={{ color: '#ff0000', marginTop: 20, marginBottom: 10 }}>See More</Text>

            </View>
            
            <ScrollView horizontal={true}>
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
            </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232D3F',
        padding: 30,
    },
});