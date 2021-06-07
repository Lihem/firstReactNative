import React ,{useState} from 'react'
import {View, Text, StyleSheet } from 'react-native'
import ColorCounter from "../components/ColorCounter"

const COLOR_INCREMENT = 10

const SquareScreen = () => {
    const [red,setRed] = useState(0)
    const [green,setGreen] = useState(0)
    const [blue,setBlue] = useState(0)

    const setColor = (myColor,change) => {
        switch(myColor){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
            return
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
            return
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
            return 
        }
    }

    return <View>
        <ColorCounter
            myNum = {red}
            onIncrease = {() => setColor('red', COLOR_INCREMENT)}
            onDecrease = {() => setColor('red' , -1 * COLOR_INCREMENT)}
            myTitle = "Red"
            />
        <ColorCounter 
            myNum = {green}
            onDecrease = {() => setColor('green' ,- COLOR_INCREMENT)}
            onIncrease = {() => setColor('green' , COLOR_INCREMENT)}
            myTitle = "Green"
            />
        <ColorCounter 
            myNum = {blue}
            onDecrease = {() => setColor('blue' ,- COLOR_INCREMENT)}
            onIncrease = {() => setColor('blue' , COLOR_INCREMENT)}       
            myTitle = "Blue"
            />
        <View style ={{ height: 150 , width: 150 , backgroundColor : `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
}

const styles = StyleSheet.create({})

export default SquareScreen