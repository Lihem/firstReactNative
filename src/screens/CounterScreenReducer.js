import React , {useReducer} from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'

const reducer = (state, action) =>{
    return {...state, count : state.count + action.payload}
}

const CounterScreen = () => {
    const [state,dispatch] = useReducer(reducer,{count :0})

    return <View>
    <Button
      title = "increase"
      onPress = {()=> {dispatch({type: 'increment',payload: 10})}}
    />
    <Button
      title = "decrease"
      onPress = {()=> {
            dispatch({type: 'decrement',payload: -1})
            }
        }
    />
        <Text style={styles.myStyle}>Counter: {state.count}</Text>
    </View>

}

const styles = StyleSheet.create({
    myStyle: {
        fontSize: 30
    }
})

export default CounterScreen