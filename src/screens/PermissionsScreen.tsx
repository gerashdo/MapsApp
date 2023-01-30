import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { BlackButton } from '../components/BlackButton'
import { PermissionsContext } from '../context/PermissionsContext'

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext( PermissionsContext )

    return (
        <View style={ styles.container }>
            <Text
                style={ styles.message }
            >Es necesario poder acceder al GPS para usar esta aplicacion</Text>
            <BlackButton 
                title='Pedir permiso'
                onPress={ askLocationPermission }
            />
            <Text style={ styles.text }>
                { JSON.stringify( permissions, null, 4 )}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 18,
        marginBottom: 15,
        width: 300,
        textAlign: 'center',
    },
    text:{
        marginTop: 30,
    }
})
