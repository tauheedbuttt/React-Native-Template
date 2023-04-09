import { SafeAreaView, View, RefreshControl, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { colors, styles } from '../config/styles'
import { error } from '../config/functions'

interface ScreenProps {
  style?: ViewStyle,
  margins?: boolean,
  children: JSX.Element | JSX.Element[],
  onScroll?: () => {},
  onRefresh?: () => {}
}

const Screen = ({ children, style, onScroll, onRefresh, margins }: ScreenProps) => {
  const appMargins = margins ? styles.screenMargins : null;
  const [refresh, setRefresh] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary, ...appMargins }}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        refreshControl={!onRefresh ? undefined :
          <RefreshControl
            refreshing={refresh}
            onRefresh={async () => {
              try {
                setRefresh(true);
                await onRefresh();
                setRefresh(false);
              } catch (err) {
                error(err);
                setRefresh(false)
              }
            }}
          />
        }
      >
        <View style={{ ...styles.screen, ...style }}>
          {children}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
export default Screen