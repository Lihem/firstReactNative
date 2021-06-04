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
