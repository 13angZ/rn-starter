import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';


function ImageDetail({title, image}) {
  return (
      <View style={styles.viewStyle}>
            <Image source={image}/>
            <Text>Image title: {title}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    viewStyle: {
        marginVertical: 20
    }
});

export default ImageDetail