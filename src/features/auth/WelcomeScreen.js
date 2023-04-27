import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';

// config
import { colors, styles } from '../../config/styles'
import { WelcomeIcon } from '../../config/svgs'
import { navigate } from '../../navigation/RootNavigation';

// Components
import Screen from '../../components/Screen'
import SubmitButton from '../../components/SubmitButton';

const WelcomeScreen = () => {
    return (
        <Screen margins>
            <View style={{ flex: 1, ...styles.center, justifyContent: 'flex-end', marginBottom: 25 }}>
                <WelcomeIcon />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.h1}>Welcome to AI Chatbot</Text>
                <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 25 }}>
                    <SubmitButton title='Sign in' onPress={() => navigate('LoginScreen')} />
                </View>
            </View>
            <TouchableOpacity onPress={() => navigate('SignupScreen')} activeOpacity={0.7}>
                <Text style={styles.belowSubmitText}>
                    <Text>Don't have an account?  </Text>
                    <Text style={{ color: colors.secondary }}>Sign up</Text>
                </Text>
            </TouchableOpacity>
        </Screen>
    )
}

export default WelcomeScreen