import React from 'react';
import {Text , StyleSheet ,View} from 'react-native';

const ComponentsScreen = () => {
    let isim = "melih"
    return (
    <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text style={styles.aaStyle}>ismim {isim}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    aaStyle:{
        fontSize: 60
    }
});

export default ComponentsScreen;