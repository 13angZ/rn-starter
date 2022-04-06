import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';


function ColorCounter({color, setColors}) {
    return (
        <View>
            <Text
                style={styles.textStyle}
            >{color}</Text>
            <Button 
                title={`Increase ${color}`}
                onPress={() => setColors(prev => ({
                    ...prev,
                    [color]: prev[color]+10
                }))}
            />
            <Button 
                title={`Decrease ${color}`}
                onPress={() => setColors(prev => ({
                    ...prev,
                    [color]: prev[color] > 0 ? prev[color]-10 : 0
                }))}
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