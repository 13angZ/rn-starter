import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

function CounterScreen() {
    const [counter, setCounter] = React.useState(0);
  return (
      <View>
          <Text>Counter: {counter}</Text>
          <Button 
            title='Add counter'
            onPress={() => setCounter(counter + 1)}
        />
      </View>
  )
}

const styles = StyleSheet.create({

})

export default CounterScreen