import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';



function TextScreen() {
    const [password, setPassword] = React.useState('');

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.textInputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newPass) => setPassword(newPass)}
            />
            {password.length < 5 && password.length > 0 ? <Text>Password must be at least 5 character</Text> : null}
        </View>
    )
}


const styles = StyleSheet.create({
    textInputStyle: {
        margin: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 12,
        paddingLeft: 12,
        paddingRight: 12,
    }
})

export default TextScreen