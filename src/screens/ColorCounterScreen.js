import React from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

function ColorCounterScreen() {
    const [colors, setColors] = React.useState({
        Red: 0,
        Green: 0,
        Blue: 0
    });


    return (
        <View>
            <ColorCounter color="Red" setColors={setColors}/>
            <ColorCounter color="Green" setColors={setColors}/>
            <ColorCounter color="Blue" setColors={setColors}/>
            <View
                style={{...styles.innerViewStyle, backgroundColor: `rgb(${colors.Red}, ${colors.Green}, ${colors.Blue})`}}
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