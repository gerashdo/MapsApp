import { createContext, useState } from "react";
import { Platform } from "react-native";
import { PermissionStatus, request, PERMISSIONS } from 'react-native-permissions'

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

    const askLocationPermission = async() => {
        let permissionStatus: PermissionStatus;

        if(Platform.OS === 'ios' ){
            permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE )
        }else{
            permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus,
        })
    }

    const checkLocationPermission = () => {

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