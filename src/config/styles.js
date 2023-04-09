import { StyleSheet, Dimensions, Platform } from "react-native"

export const { width, height } = Dimensions.get('window');
export const paddingHorizontal = 30;
export const screenPadding = paddingHorizontal - 10;

export const colors = {
  primary: '#031B22',
  lightPrimary: 'rgba(3, 27, 34, 0.5)',
  secondary: '#19B890',
  lightSecondary: 'rgba(25, 184, 144, 0.5)',
  primaryText: '#fff',
  border: '#BDBDBD',
  icon: '#3B3B3B',
  white: 'white',
  black: 'black',
  brand: '#F5F5F5',
  success: '#04B200'
}

export const fonts = {
  'Poppins-Black': 'Poppins-Black',
  'Poppins-BlackItalic': 'Poppins-BlackItalic',
  'Poppins-Bold': 'Poppins-Bold',
  'Poppins-BoldItalic': 'Poppins-BoldItalic',
  'Poppins-ExtraBold': 'Poppins-ExtraBold',
  'Poppins-ExtraBoldItalic': 'Poppins-ExtraBoldItalic',
  'Poppins-ExtraLight': 'Poppins-ExtraLight',
  'Poppins-ExtraLightItalic': 'Poppins-ExtraLightItalic',
  'Poppins-Italic': 'Poppins-Italic',
  'Poppins-Light': 'Poppins-Light',
  'Poppins-LightItalic': 'Poppins-LightItalic',
  'Poppins-Medium': 'Poppins-Medium',
  'Poppins-MediumItalic': 'Poppins-MediumItalic',
  'Poppins-Regular': 'Poppins-Regular',
  'Poppins-SemiBold': 'Poppins-SemiBold',
  'Poppins-SemiBoldItalic': 'Poppins-SemiBoldItalic',
  'Poppins-Thin': 'Poppins-Thin',
  'Poppins-ThinItalic': 'Poppins-ThinItalic',
}

const center = {
  alignItems: 'center',
  justifyContent: 'center'
};
const border = {
  borderWidth: 1,
  borderColor: colors.border
};
const appMargins = {
  paddingHorizontal: paddingHorizontal
};
const screenMargins = {
  paddingHorizontal: screenPadding
};

export const styles = StyleSheet.create({
  // Basic
  center,
  border,
  appMargins,
  screenMargins,

  diaglogContainerStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  dialogStyle: {
    backgroundColor: 'white',
    padding: 20,
    margin: screenPadding,
    borderRadius: 10,
    elevation: 10
  },
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  submitContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  counter: {
    backgroundColor: colors.border,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  // Navigators
  tabBarLabel: {
    fontFamily: fonts["Poppins-Medium"],
    fontSize: 12
  },
  tabBarStyle: {
    height: 60
  },
  // Text
  h1: {
    fontSize: 20,
    color: colors.primaryText,
    fontFamily: fonts["Poppins-SemiBold"]
  },
  h2: {
    fontSize: 20,
    color: colors.primaryText,
    fontFamily: fonts["Poppins-Medium"]
  },
  h3: {
    fontSize: 17,
    color: colors.primaryText,
    fontFamily: fonts["Poppins-Medium"]
  },
  h4: {
    fontSize: 15,
    color: colors.primaryText,
    fontFamily: fonts["Poppins-Medium"]
  },
  p: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts["Poppins-Regular"]
  },
  white_text: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts["Poppins-Medium"]
  },
  link: {
    fontSize: 12,
    color: colors.secondary,
    fontFamily: fonts["Poppins-Regular"],
    borderBottomWidth: 1,
    borderColor: colors.white,
  },
  belowSubmitText: {
    fontSize: 11,
    color: colors.primaryText,
    fontFamily: fonts["Poppins-Regular"],
    textAlign: 'center'
  },
  error: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: fonts["Poppins-Regular"],
    textAlign: 'center',
    marginBottom: 5
  },
  searchBarRight: {
    fontSize: 10,
    fontFamily: fonts["Poppins-Regular"],
    color: colors.primaryText
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: fonts["Poppins-Medium"],
    color: colors.primaryText
  },
  email: {
    fontSize: 14,
    fontFamily: fonts["Poppins-Regular"],
    color: colors.primaryText
  },
  // Form
  formLabel: {
    fontFamily: fonts["Poppins-Medium"],
    fontSize: 14,
    color: colors.primaryText,
    marginLeft: 5,
    marginBottom: 5
  },
  formInput: {
    fontFamily: fonts["Poppins-Regular"],
    fontSize: 13,
    flex: 1,
    marginBottom: -3,
    color: colors.primaryText,
    height: 45,
  },
  formInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 13,
    marginBottom: 17,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.03)'
  },
  // Buttons
  disabledButton: {
    backgroundColor: colors.lightSecondary
  },
  primaryButton: {
    backgroundColor: colors.secondary,
    borderRadius: 13,
    paddingVertical: 12,
    ...center
  },
  primaryText: {
    color: colors.white,
    fontFamily: fonts["Poppins-Medium"],
    fontSize: 16,
  },
  ternaryButton: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    ...center
  },
  ternaryText: {
    color: colors.border,
    fontFamily: fonts["Poppins-Medium"],
    fontSize: 15,
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 12,
    ...center
  },
  secondaryText: {
    color: colors.primary,
    fontFamily: fonts["Poppins-Medium"],
    fontSize: 15,
  },
})