import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const ComponentsScreen = () => {
    const name = 'Romdon'
    return <View>
        <Text style={styles.textStyle}>This is the components Screen</Text>
        <Text style={styles.nameStyle}>My name is {name}</Text>
    </View>
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    nameStyle: {
        fontSize: 12
    }
});


export default ComponentsScreen;