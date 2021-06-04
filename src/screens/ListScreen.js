import React from "react"
import {View,Text ,StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: "Friend1" ,key:"1"},
        {name: "Friend2" ,key:"2"},
        {name: "Friend3" ,key:"3"}
    ]
    return (
    <FlatList
     //horizontal={true}
     showsVerticalScrollIndicator = {false}
     keyExtractor = {(friend) => friend.name}
     data={friends}
      renderItem = {({item}) => {
          return <Text style={styles.textStyle1}>{item.name}---{item.key}</Text>
      }}
     />
    )
};

const styles = StyleSheet.create({
    textStyle1:{
        marginVertical: 100
    }
})

export default ListScreen