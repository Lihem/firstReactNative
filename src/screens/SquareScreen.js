import React ,{useReducer} from 'react'
import {View, Text, StyleSheet } from 'react-native'
import ColorCounter from "../components/ColorCounter"

const COLOR_INCREMENT = 10
                         //action denen sey statei nasil degistirecegimizi soyleyen obje
const reducer = (state, action) =>{     //reducer herzaman bir state objesi donmeli ya guncellenmis bir halini yada kendisini
    switch(action.type){
        case 'change_red':
            if(state.red + action.payload > 255 || state.red + action.payload < 0){
                return state
            }
            return {...state, red: state.red + action.payload}
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : {...state, green: state.green + action.payload}
        case 'change_blue':
            if(state.blue + action.payload > 255 || state.blue + action.payload < 0){
                return state
            }
            return {...state, blue: state.blue + action.payload}
        default:
            return state
    }
}

    //action icin not:
    // {colorToChange: 'red' , amount:15}  yerine  {type: 'change_red' , payload: 15} kullanimi yaygin kullanim
    // type => String that describes the exact change operation we want to make
    // payload => some data that is critical to the change operation

const SquareScreen = () => {
    //dispatch <> runMyReducer                   state'in initial degeri
    const [state,dispatch] = useReducer(reducer,{red: 0, green:0 ,blue:0})
    const {red,green,blue} = state         //bu sekilde statein icinden degerleri cekebiliyoruz
    //const [red, green, blue] = [state.red,state.green, state.blue]

    return <View>
        <ColorCounter
            myNum = {red}              //dispatch arguman olarak action aliyor burda action objeleri olusturuyoruz
            onIncrease = {() => dispatch({type: 'change_red' , payload: COLOR_INCREMENT})}
            onDecrease = {() => dispatch({type: 'change_red' , payload: -COLOR_INCREMENT})}
            myTitle = "Red"
            />
        <ColorCounter 
            myNum = {green}
            onDecrease = {() => dispatch({type: 'change_green' , payload: -COLOR_INCREMENT})}
            onIncrease = {() => dispatch({type: 'change_green' , payload: COLOR_INCREMENT})}
            myTitle = "Green"
            />
        <ColorCounter 
            myNum = {blue}
            onDecrease = {() => dispatch({type: 'change_blue' , payload: -COLOR_INCREMENT})}
            onIncrease = {() => dispatch({type: 'change_blue' , payload: COLOR_INCREMENT})}       
            myTitle = "Blue"
            />
        <View style ={{ height: 150 , width: 150 , backgroundColor : `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
}

const styles = StyleSheet.create({})

export default SquareScreen