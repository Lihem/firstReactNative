import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetail = (props) => { //props yerine ({mySource, myTitle, score}) gelebilirdi daha verimli
    return <View>
        <Image source={props.mySource}/>
        <Text>{props.myTitle}</Text>
        <Text>{props.score}</Text>
        </View>

}

const styles = StyleSheet.create({})

export default ImageDetail