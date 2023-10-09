import { FlatList, Text, View, Image } from "react-native";
export default function CourseList({ courseList }: { courseList: Course[] }) {
    return (
        <FlatList
            data={courseList}
            renderItem={({ item }) => {
                return (
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Image source={{ uri: `https://cdn.ineuron.ai/assets/uploads/thumbnails/${item.img}` }} style={{ height: 150, width: 170, resizeMode: "contain" }} />
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", width: 170, marginLeft: 20 }}>
                            <Text style={{ color: "#fff", fontWeight: "600" }}>{item.title}</Text>
                            <Text style={{ color: "#fff", fontWeight: "300" }}>{item.instructorsDetails[0]?.name}</Text>
                            <Text style={{ color: "#fff", marginTop: 10 }}>{item.pricing.IN === 0 || item.pricing.IN === undefined ? "Free" : "₹ " + item.pricing.IN}</Text>
                        </View>
                    </View>
                )
            }}

        />
    )
}