import React, { useContext } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { PermissionStatus, request,PERMISSIONS } from "react-native-permissions"
import { PermissionsContext } from '../context/PernissionsContext'

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext( PermissionsContext )

    return (
        <View style={ styles.container }>
            <Text>PermissionsScreen</Text>
            <Button 
                title="Pedir permiso"
                onPress={ askLocationPermission }
            />
            <Text>
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
    }
})
