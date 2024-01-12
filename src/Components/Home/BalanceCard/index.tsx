import { Rubik_300Light, Rubik_600SemiBold, useFonts } from '@expo-google-fonts/rubik';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { balancedCardStyles } from './style';

export default function BalanceCard() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_300Light,
    });

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetailsVisibility = () => {
        setShowDetails(!showDetails);
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <LinearGradient colors={['#FF8C00', '#FFBF00']} style={balancedCardStyles.linearGradient}>
            <View style={balancedCardStyles.sectionContainer}>
                <View
                    style={[
                        balancedCardStyles.sectionTextContainer,
                        { borderLeftColor: '#3F3FD2' },
                    ]}>
                    <Text style={balancedCardStyles.sectionText}>Saldo Atual</Text>
                    {showDetails ? (
                        <Text style={balancedCardStyles.sectionText}>R$ 1.000,00</Text>
                    ) : (
                        <Text style={balancedCardStyles.sectionText}>R$ ---</Text>
                    )}
                </View>
                <TouchableOpacity onPress={toggleDetailsVisibility}>
                    {showDetails ? (
                        <FontAwesome5
                            name="eye"
                            size={RFValue(28)}
                            style={balancedCardStyles.eyeIcon}
                        />
                    ) : (
                        <FontAwesome5
                            name="eye-slash"
                            size={RFValue(28)}
                            style={balancedCardStyles.eyeIcon}
                        />
                    )}
                </TouchableOpacity>
            </View>

            <View style={balancedCardStyles.divider} />

            <View style={balancedCardStyles.sectionContainer}>
                <View
                    style={[
                        balancedCardStyles.sectionTextContainer,
                        { borderLeftColor: '#18A31E' },
                    ]}>
                    <Text style={balancedCardStyles.sectionText}>Entradas</Text>
                    {showDetails ? (
                        <Text style={balancedCardStyles.sectionText}>R$ 2.000,00</Text>
                    ) : (
                        <Text style={balancedCardStyles.sectionText}>R$ ---</Text>
                    )}
                </View>
                <View
                    style={[
                        balancedCardStyles.sectionTextContainer,
                        { borderLeftColor: '#EF1111' },
                    ]}>
                    <Text style={balancedCardStyles.sectionText}>Saídas</Text>
                    {showDetails ? (
                        <Text style={balancedCardStyles.sectionText}>R$ 1.000,00</Text>
                    ) : (
                        <Text style={balancedCardStyles.sectionText}>R$ ---</Text>
                    )}
                </View>
            </View>
        </LinearGradient>
    );
}
