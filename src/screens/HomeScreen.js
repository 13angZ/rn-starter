import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View> 
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => navigation.navigate('List')}
        title='Go to List Screen' 
      />
      <Button  
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Screen'
      />
      <Button  
        onPress={() => navigation.navigate('Image')}
        title='Go to Image Demo'
      />
      <Button  
        onPress={() => navigation.navigate('Counter')}
        title='Go to Counter Demo'
      />
      <Button  
        onPress={() => navigation.navigate('RandomColors')}
        title='Go to Random Colors Demo'
      />
      <Button  
        onPress={() => navigation.navigate('ColorCounter')}
        title='Go to Color Counter Demo'
      />
      <Button  
        onPress={() => navigation.navigate('TextInput')}
        title='Go to Text Screen Demo'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
