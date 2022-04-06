import React from 'react';
import {View, Button, StyleSheet, FlatList} from 'react-native';

function RandomColorsScreen() {
    const [colors, setColors] = React.useState([]);

    console.log(colors)
    return (
        <View>
            <Button 
                title='Add Color'
                onPress={()=> setColors([...colors, randomColors()])}
            />
            <FlatList 
                data={colors}
                keyExtractor={(color)=>color}
                renderItem={({item})=> {
                    console.log(item)
                    return (
                        <View 
                            style={{...styles.innerViewStyle, backgroundColor: item}}
                        ></View>
                    )
                }}

            />
        </View>
    )
}


const randomColors = () => {
    const red = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    innerViewStyle: {
        marginVertical: 20,
        borderRadius: 12,
        width: 100,
        height: 100
    }
})

export default RandomColorsScreen