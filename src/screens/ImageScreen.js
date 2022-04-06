
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

// const forest = require('../../assets/forest.jpg');
// const beach = require('../../assets/beach.jpg');
// const mountain = require('../../assests/mountain.jpg');

function ImageScreen() {
  return (
    <View>
        <ImageDetail title="Forest" image={require('../../assets/forest.jpg')} />
        <ImageDetail title="Beach" image={require('../../assets/beach.jpg')} />
        <ImageDetail title="Mountain" image={require('../../assets/mountain.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 2
    }
});

export default ImageScreen