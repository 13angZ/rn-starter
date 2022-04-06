import React from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
        {name: 'friend 1', age: 20},
        {name: 'friend 2', age: 30},
        {name: 'friend 3', age: 40},
        {name: 'friend 4', age: 50},
        {name: 'friend 5', age: 60},
    ];
    return (
        <FlatList 
            keyExtractor={(f)=> f.name}
            // horizontal
            // showsHorizontalScrollIndicator={false}
            data={friends}
            renderItem={({item}) => (
                <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            )}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        marginVertical: 20,
        marginHorizontal: 20
    }
})

export default ListScreen;