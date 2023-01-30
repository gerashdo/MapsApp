import React from 'react'
import { Button, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Text, TouchableOpacity } from 'react-native'

interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

export const BlackButton = ({ title, onPress, style = {} }: Props) => {
  return (
    <TouchableOpacity
        onPress={ onPress }
        style={{
            ...styles.button,
            ...style as any,
        }}
        activeOpacity={ 0.8 }
    >
        <Text style={ styles.buttonText }>{ title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        height: 50,
        width: 150,
        backgroundColor: 'black',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 18,
        color: 'white',
    }
})
