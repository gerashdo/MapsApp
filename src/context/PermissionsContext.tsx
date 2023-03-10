import { createContext, useEffect, useState } from "react";
import { AppState } from "react-native";
import { Platform } from "react-native";
import { PermissionStatus, request, PERMISSIONS, check, openSettings } from 'react-native-permissions'

export interface PermissionsState {
    locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionsProps = {
    permissions: PermissionsState,
    askLocationPermission: () => void,
    checkLocationPermission: () => void,
}

export const PermissionsContext = createContext( {} as PermissionsProps )


export const PermissionsProvider = ({ children }: any ) => {

    const [permissions, setPermissions] = useState( permissionsInitState )

    useEffect(() => {
      AppState.addEventListener( 'change', state => {

        if( state !== 'active' ) return;

        checkLocationPermission();
      })
    
    }, [])
    

    const askLocationPermission = async() => {
        let permissionStatus: PermissionStatus;

        if(Platform.OS === 'ios' ){
            permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE )
        }else{
            permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
        }

        if( permissionStatus === 'blocked' ) openSettings();

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus,
        })
    }

    const checkLocationPermission = async() => {
        let permissionStatus: PermissionStatus;

        if(Platform.OS === 'ios' ){
            permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE )
        }else{
            permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus,
        })
    }

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission,
        }}>
            { children }
        </PermissionsContext.Provider>
    )
}