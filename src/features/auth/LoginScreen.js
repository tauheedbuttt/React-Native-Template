import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SvgXml } from 'react-native-svg';

// config
import { colors, styles } from '../../config/styles'
import { svgs } from '../../config/svgs'
import { navigate } from '../../navigation/RootNavigation'
import { validatePassword, validateEmail, validateInput } from '../../config/functions';

// components
import Screen from '../../components/Screen'
import SubmitButton from '../../components/SubmitButton'
import Form from '../../components/Form';
import useAuth from '../../hooks/useAuth';

const LoginScreen = ({ navigation }) => {

  const { loading, errorMessage, onLogin } = useAuth();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [showPass, setShowPass] = useState(true);

  const onSubmit = async () => {
    if (validateInput(fields)) return;
    onLogin(credentials);
  }

  const fields = [
    {
      placeholder: 'Email',
      value: credentials.email,
      icon: <SvgXml xml={svgs.user} color={colors.white} />,
      setValue: (value) => setCredentials({
        ...credentials,
        email: value
      }),
      error: credentials.email ? 'Invalid Email' : 'Enter Email',
      isValid: validateEmail(credentials.email),
      autoCapitalize: 'none'
    },
    {
      placeholder: 'Password',
      value: credentials.password,
      icon: <SvgXml xml={svgs.lock} color={colors.white} />,
      setValue: (value) => setCredentials({
        ...credentials,
        password: value
      }),
      error: credentials.email ? 'Password must be of at least 8 length and needs to have 1 Uppercase letter, 1 Lowercase letter, 1 symbol and 1 number' : 'Enter Password',
      isValid: validatePassword(credentials.password),
      onSubmit: onSubmit,
      show: showPass,
      setShow: () => setShowPass(!showPass),
      autoCapitalize: 'none'
    }
  ]

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
    return () => navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex' }, tabBarVisible: true })
  }, [navigation]);

  return (
    <Screen margins>
      {/* Header */}
      <View style={{ ...styles.center, marginVertical: 50 }}>
        <SvgXml xml={svgs.logo} />
        <Text style={{ ...styles.h1, marginTop: 20 }} >Hello Again!</Text>
        <Text style={{ ...styles.h1 }} >You've been missed</Text>
      </View>
      {/* Form */}
      <Form fields={fields} />
      {/* Forgot Password */}
      <TouchableOpacity onPress={() => { }} activeOpacity={0.7}>
        <Text style={{ color: colors.secondary, textAlign: 'right' }}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <View style={{ ...styles.submitContainer, marginTop: 35 }}>
        {
          !errorMessage ? null :
            <Text style={styles.error}>{error}</Text>
        }
        <SubmitButton
          title={'Sign in'}
          style={{ marginBottom: 20 }}
          onPress={onSubmit}
          loading={loading}
        />
        <TouchableOpacity onPress={() => navigate('SignupScreen')} activeOpacity={0.7}>
          <Text style={styles.belowSubmitText}>
            <Text>Don't have an account?   </Text>
            <Text style={{ color: colors.secondary }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

export default LoginScreen