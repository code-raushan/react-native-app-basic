import { useState } from "react";
import { View, Text, Button, Pressable } from 'react-native';

export default function ReadMore({ text, maxLength }: { text: string, maxLength: number }) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const displayText = isExpanded ? text : text.slice(0, maxLength);

    const toggle = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <View>
            <Text style={{ color: "#fff", fontWeight: "400"}}>{displayText}{text.length > maxLength && (
                <Text onPress={toggle} style={{color: isExpanded?"#362FD9": "#ff0000"}}>{isExpanded ? "Read Less" : "...Read More"}</Text>
            )}
            </Text>

        </View>
    )
}