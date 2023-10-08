import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import course1 from '../assets/course1.webp'
import course3 from '../assets/course3.webp'
import { useState, useEffect, useLayoutEffect } from "react"
import axios from "axios"

export const Home = () => {
    const [courseData, setCourseData] = useState<Course[] | []>([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchCourseData = async () => {
        try {
          const response = await axios.get('https://api.ineuron.ai/v1/course');
          
          setCourseData(response.data.data); // Update the state with the response data.
        } catch (error) {
          console.error('Error fetching data:', error);
        }finally{
            setIsLoading(false);
        }
      };
    useLayoutEffect(()=>{
        fetchCourseData();
    }, []);
    
    if(isLoading){
        return (
            <Text>Loading...</Text>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={{marginTop: 20, color: "#fff"}}>{courseData[49].tags[0]}</Text>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{ color: '#fff', marginTop: 20, marginBottom: 10 }}>Live Course Programs</Text>
                <Text style={{ color: '#ff0000', marginTop: 20, marginBottom: 10 }}>See More</Text>
            </View>
            
            <ScrollView horizontal={true}>
                {courseData.map((course)=>{
                    if(course.tags){
                        return(
                            <Image source={{uri: `https://cdn.ineuron.ai/assets/uploads/thumbnails/${course.img}`}} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                        )
                    }
                })}
                {/* <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} />
                <Image source={course3} style={{ height: 200, width: 300, marginRight: 20, resizeMode: 'contain' }} /> */}
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