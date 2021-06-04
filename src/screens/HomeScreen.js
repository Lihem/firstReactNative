import React from "react";
import { Text, StyleSheet ,View, Button ,TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {

  return <View>
    <Text style={styles.text}>melih</Text>
    <Button 
      onPress ={() => props.navigation.navigate('Components')}
      title="buton" 
    />
    <Button
      title = "gotolist"
      onPress = {()=> navigation.navigate("List")}
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

