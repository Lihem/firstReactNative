import React,{useState} from 'react'
import {View,Text ,StyleSheet, TextInput} from 'react-native'

const TextScreen= ()=>{
    const [name , setName] = useState('')
    return <View>
        <Text>Enter a Password</Text>
            <TextInput 
                value = {name}
                onChangeText = { newValue => 
                    setName(newValue)
                }
                style={styles.input} 
                autoCapitalize="none" 
                autoCorrect={false}
            />
        {name.length > 5 ? <Text>Password is {name}</Text> : <Text>Password must be longer than 5</Text>}
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        
    }
})

export default TextScreen