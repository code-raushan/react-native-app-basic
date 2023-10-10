
import React from 'react'
import { Button, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
type Props = {}

export default function GoBack() {
    const navigation = useNavigation()
  return (
    <Pressable onPress={()=>navigation.goBack()}>
        <Icon style={{color: "#fff"}} size={30} name="chevron-back-circle"/>
    </Pressable>
  )
}