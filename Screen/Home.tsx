import { View, Text, StyleSheet, Image, ScrollView, FlatList } from "react-native"
import { useState, useEffect, useLayoutEffect } from "react"
import axios from "axios"
import CourseItem from "../components/CourseItem"

export const Home = () => {
    const [courseData, setCourseData] = useState<Course[]>([]);
    const [banner, setBanner] = useState<Banner[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCourseData = async () => {
        try {
            const response = await axios.get('https://api.ineuron.ai/v1/course');

            setCourseData(response.data.data); // Update the state with the response data.
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };
    const fetchTopBanners = async ()=>{
        try {
            const response = await axios.get('https://api.ineuron.ai/v1/banners?type=MOBILE');
            setBanner(response.data.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useLayoutEffect(() => {
        fetchTopBanners();
        fetchCourseData();

    }, []);

    if (isLoading) {
        return (
            <Text>Loading...</Text>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <FlatList 
                data={banner}
                renderItem={({item})=> <Image source={{uri: `https://cdn.ineuron.ai/assets/uploads/banners/${item.imgUrl}`}} style={{width: 300, height: 200, resizeMode: "contain"}}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                ItemSeparatorComponent={()=><View style={{width: 20}}/>}
            />
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: '#fff', marginTop: 20, marginBottom: 10, fontSize: 20 }}>Live Programs</Text>
                <Text style={{ color: '#ff0000', marginTop: 20, marginBottom: 10 }}>See More</Text>
            </View>

            <FlatList
                data={courseData.filter((course: Course) => course.tags?.includes('live'))}
                renderItem={({ item }) => <CourseItem item={item}/>}
                keyExtractor={item => item._id}
                horizontal={true}
            />

            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: '#fff', marginTop: 20, marginBottom: 10, fontSize: 20  }}>Affordable Programs</Text>
                <Text style={{ color: '#ff0000', marginTop: 20, marginBottom: 10 }}>See More</Text>
            </View>

            <FlatList
                data={courseData.filter((course: Course) => course.tags?.includes('affordable'))}
                renderItem={({ item }) => <CourseItem item={item}/>}
                keyExtractor={item => item._id}
                horizontal={true}
            />
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: '#fff', marginTop: 20, marginBottom: 10, fontSize: 20  }}>Test Series</Text>
                <Text style={{ color: '#ff0000', marginTop: 20, marginBottom: 10 }}>See More</Text>
            </View>

            <FlatList
                data={courseData.filter((course: Course) => course.tags?.includes('test-series'))}
                renderItem={({ item }) =><CourseItem item={item}/>}
                keyExtractor={item => item._id}
                horizontal={true}
            />
             <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: '#fff', marginTop: 20, marginBottom: 10, fontSize: 20  }}>Community Programs</Text>
                <Text style={{ color: '#ff0000', marginTop: 20, marginBottom: 10 }}>See More</Text>
            </View>

            <FlatList
                data={courseData.filter((course: Course) => course.tags?.includes('community'))}
                renderItem={({ item }) => <CourseItem item={item}/>}
                keyExtractor={item => item._id}
                horizontal={true}
                style={{marginBottom:30}}
            />
        </ScrollView>
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