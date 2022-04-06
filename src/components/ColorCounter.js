import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';


function ColorCounter({color, onDecrease, onIncrease}) {
    return (
        <View>
            <Text
                style={styles.textStyle}
            >{color}</Text>
            <Button 
                title={`Increase ${color}`}
                onPress={() => onIncrease()}
            />
            <Button 
                title={`Decrease ${color}`}
                onPress={() => onDecrease()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 12
    }
})

export default ColorCounter