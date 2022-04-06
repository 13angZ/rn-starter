import React from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';



const colorCallback = (state, color, payload) => {
    return (state[color] + payload) > 0 || (state[color] + payload) < 255 ? state[color] + payload : state
}

const reducer = (state, action) => {
    // state = {Red: number, Green: number, Blue: number}
    // action = {type: 'change_red' || 'change_green' || 'change_blue', payload: number}


    switch (action.type) {
        case 'change_red':
            return {...state, Red: colorCallback(state, 'Red', action.payload)};

        case 'change_green':
            return {...state, Green: colorCallback(state, 'Green', action.payload)};

        case 'change_blue':
            return {...state, Blue: colorCallback(state, 'Blue', action.payload)};
        
        default:
            return;
    }
}

function ColorCounterScreen() {
    const [state, dispatch] = React.useReducer(reducer, {
        Red: 0,
        Green: 0,
        Blue: 0
    });

    const {Red, Green, Blue} = state;


    // const setColorsCb = (color, increment_value) => {
    //     setColors(prev => ({
    //         ...prev,
    //         [color]: (prev[color] + increment_value) > 0 ? prev[color] + increment_value : prev[color]
    //     }))
    // }

    const increment_value = 25;
    return (
        <View>
            <ColorCounter 
                color="Red" 
                onIncrease={() => dispatch({type: 'change_red', payload: increment_value})}
                onDecrease={() => dispatch({type: 'change_red', payload: -1*increment_value})}
            />
            <ColorCounter 
                color="Green" 
                onIncrease={() => dispatch({type: 'change_green', payload: increment_value})}
                onDecrease={() => dispatch({type: 'change_green', payload: -1*increment_value})}
            />
            <ColorCounter 
                color="Blue" 
                onIncrease={() => dispatch({type: 'change_blue', payload: increment_value})}
                onDecrease={() => dispatch({type: 'change_blue', payload: -1*increment_value})}
            />
            <View
                style={{...styles.innerViewStyle, backgroundColor: `rgb(${Red}, ${Green}, ${Blue})`}}
            >
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    innerViewStyle: {
        borderRadius: 12,
        marginVertical: 12,
        width: 100,
        height: 100
    }
})

export default ColorCounterScreen