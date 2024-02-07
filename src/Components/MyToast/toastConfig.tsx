import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { ErrorToast, InfoToast, SuccessToast } from 'react-native-toast-message';

export const toastConfig = {
    success: (props: any) => (
        <SuccessToast
            {...props}
            text1Style={{
                fontSize: RFValue(15),
                fontFamily: 'Rubik_300Light',
            }}
            text2Style={{
                fontSize: RFValue(12),
                fontFamily: 'Rubik_300Light',
            }}
        />
    ),
    error: (props: any) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: RFValue(15),
                fontFamily: 'Rubik_300Light',
            }}
            text2Style={{
                fontSize: RFValue(12),
                fontFamily: 'Rubik_300Light',
            }}
        />
    ),
    info: (props: any) => (
        <InfoToast
            {...props}
            text1Style={{
                fontSize: RFValue(15),
                fontFamily: 'Rubik_300Light',
            }}
            text2Style={{
                fontSize: RFValue(12),
                fontFamily: 'Rubik_300Light',
            }}
        />
    ),
};
