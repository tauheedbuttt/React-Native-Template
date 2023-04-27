import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SvgXml } from 'react-native-svg';
import CheckBox from '@react-native-community/checkbox';

// config
import { colors, height, styles, width } from '../../config/styles'
import { Logo, MailIcon, LockIcon } from '../../config/svgs'
import { navigate } from '../../navigation/RootNavigation'
import { validatePassword, validateEmail, validateInput } from '../../config/functions';

// components
import Screen from '../../components/Screen'
import SubmitButton from '../../components/SubmitButton'
import Form from '../../components/Form';
import useAuth from '../../hooks/useAuth';

const SignupScreen = () => {

  const { loading, errorMessage, onSignup } = useAuth();

  const [credentials, setCredentials] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPass, setShowPass] = useState(true);
  const [checked, setChecked] = useState();

  const onSubmit = async () => {
    if (validateInput(fields)) return;
    onSignup(credentials);
  }

  const fields = [
    {
      data: [
        {
          placeholder: 'First Name',
          value: credentials.firstname,
          setValue: (value) => setCredentials({
            ...credentials,
            firstname: value
          }),
          error: 'Enter First Name',
          isValid: !!credentials.firstname
        },
        {
          placeholder: 'Last Name',
          value: credentials.lastname,
          setValue: (value) => setCredentials({
            ...credentials,
            lastname: value
          }),
          error: 'Enter Last Name',
          isValid: !!credentials.lastname
        },
      ]
    },
    {
      placeholder: 'Email',
      value: credentials.email,
      icon: <MailIcon color={colors.white} />,
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
      icon: <LockIcon color={colors.white} />,
      setValue: (value) => setCredentials({
        ...credentials,
        password: value
      }),
      error: credentials.password ? 'Password must be of at least 8 length and needs to have 1 Uppercase letter, 1 Lowercase letter, 1 symbol and 1 number' : 'Enter Password',
      isValid: validatePassword(credentials.password),
      show: showPass,
      setShow: () => setShowPass(!showPass),
      autoCapitalize: 'none'
    },
    {
      placeholder: 'Confirm Password',
      value: credentials.confirmPassword,
      icon: <LockIcon color={colors.white} />,
      setValue: (value) => setCredentials({
        ...credentials,
        confirmPassword: value
      }),
      error: credentials.confirmPassword ? 'Confirm Password does not match the password' : 'Enter Password',
      isValid: credentials.confirmPassword == credentials.password,
      onSubmit: onSubmit,
      show: showPass,
      setShow: () => setShowPass(!showPass),
      autoCapitalize: 'none'
    }
  ]

  return (
    <Screen margins>
      <View style={{ ...styles.center, marginVertical: 50 }}>
        <Logo color='white' />
        <Text style={{ ...styles.h1, marginTop: 20 }} >Hello Again!</Text>
        <Text style={{ ...styles.h1 }} >You've been missed</Text>
      </View>
      <Form fields={fields} />
      {/* Checkbox */}

      <TouchableOpacity onPress={() => setChecked(!checked)} activeOpacity={0.7} style={{ flexDirection: 'row', gap: 5 }}>
        <CheckBox
          value={checked}
          onValueChange={(newValue) => setChecked(newValue)}
        />
        <Text style={{ color: colors.primaryText, flex: 1 }}>
          <Text>By signing up, you’re agree to our </Text>
          <Text style={{ color: colors.secondary }}>Terms & Conditions </Text>
          <Text>and </Text>
          <Text style={{ color: colors.secondary }}>Privacy
            Policy</Text>
        </Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <View style={{ ...styles.submitContainer, marginTop: 35 }}>
        {
          !errorMessage ? null :
            <Text style={styles.error}>{errorMessage}</Text>
        }
        <SubmitButton
          title={'Sign up'}
          style={{ marginBottom: 20 }}
          onPress={onSubmit}
          loading={loading}
          disabled={!checked}
        />
        <TouchableOpacity onPress={() => navigate('LoginScreen')} activeOpacity={0.7}>
          <Text style={styles.belowSubmitText}>
            <Text>Already have an account?   </Text>
            <Text style={{ color: colors.secondary }}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

export default SignupScreen