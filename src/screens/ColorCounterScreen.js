import React from 'react';
import {View, StyleSheet} from 'react-native';

function ColorCounterScreen() {
    const [colors, setColors] = React.useState({
        Red: 0,
        Green: 0,
        Blue: 0
    });


    return (
        <View>
            <ColorCounter color/>
            <ColorCounter color/>
            <ColorCounter color/>
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
        marginVertical: 12
    }
})

export default ColorCounterScreen