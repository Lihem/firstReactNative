import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
    return <View>
        <ImageDetail myTitle="Forest" mySource={require("../../assets/forest.jpg")} score={7}/>
        <ImageDetail myTitle="Beach" mySource={require("../../assets/beach.jpg")} score={8}/>
        <ImageDetail myTitle="Mountain" mySource={require("../../assets/mountain.jpg")} score={9}/>
    </View>

}

const styles = StyleSheet.create({})

export default ImageScreen