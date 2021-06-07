import React from 'react'
import {View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({myTitle,onIncrease,onDecrease,myNum}) => {
    return <View>
        <Text>{myTitle} : {myNum}</Text>
        <Button onPress = {() => onIncrease()} title = {`Increase ${myTitle}`}/>
        <Button onPress = {() => onDecrease()} title = {`Decrease ${myTitle}`}/>
    </View>
}

const styles = StyleSheet.create({})

export default ColorCounter