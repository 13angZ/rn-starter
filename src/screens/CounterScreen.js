import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';


const reducer = (state, action) => {
  // state = {counter: number}
  // action = {type: 'change_counter', payload: number}


  switch (action.type) {
    case 'change_counter': 
      return state.counter + action.payload >= 0 ? {counter: state.counter + action.payload }: state

    default:
      return;
  }
}

function CounterScreen() {
    const [state, dispatch] = React.useReducer(reducer, {counter: 0});

    const {counter} = state;

    const counter_increment = 1;

    return (
        <View>
            <Button 
              title='Add Counter'
              onPress={() => dispatch({type: 'change_counter', payload: counter_increment})}
              />
            <Button 
              title='Remove Counter'
              onPress={() => dispatch({type: 'change_counter', payload: -1*counter_increment})}
            />
            <Text style={styles.textStyle}>Current Counter: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center'
  },
})

export default CounterScreen