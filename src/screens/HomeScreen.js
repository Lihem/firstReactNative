import React from "react";
import { Text, StyleSheet ,View, Button ,TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {

  return <View>
    <Text style={styles.text}>melih</Text>
    <Button 
      onPress ={() => navigation.navigate('Components')}
      title="gotocomponents" 
    />
    <Button
      title = "gotolist"
      onPress = {()=> navigation.navigate("List")}
    />
    <Button
      title = "gotoimages"
      onPress = {()=> navigation.navigate("Images")}
    />
    <Button
      title = "gotocounterscreen"
      onPress = {()=> navigation.navigate("Counter")}
    />
    <Button
      title = "colors"
      onPress = {()=> navigation.navigate("Color")}
    />
    <Button
      title = "squaredemo"
      onPress = {()=> navigation.navigate("Square")}
    />
    <Button
      title = "ReducerCounter"
      onPress = {()=> navigation.navigate("RCounter")}
    />
    <TouchableOpacity onPress ={()=> navigation.navigate('List')}>
      <Text style={styles.text}>Go to List</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

