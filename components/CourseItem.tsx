import {View, Text, Image} from 'react-native';

type Props = {
    item: Course
}

export default function CourseItem({item}: Props){
    return(
        <View style={{height:250, width: 260, marginRight: 10}}>
            <Image source={{ uri: `https://cdn.ineuron.ai/assets/uploads/thumbnails/${item.img}` }} style={{ height: 150, width: 250, marginRight: 20, resizeMode: 'contain', borderRadius: 10}}/>
            <Text style={{color: 'white', fontWeight:"700"}}>{item.title}</Text>
            <Text style={{color: 'white', fontWeight:"200"}}>{item.instructorsDetails[0]?.name}</Text>
            <Text style={{color: 'white', fontWeight:"700"}}>{item.pricing.IN===0 || item.pricing.IN===undefined? "Free": "₹ "+item.pricing.IN}</Text>
        </View>
    )
}