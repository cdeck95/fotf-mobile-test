import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const MyWebComponent = () => {
  return <WebView source={{ uri: 'https://poetic-bonbon-daf9f3.netlify.app/' }} style={styles.webview} />
}

// const [hidden, setHidden] = useState(false);
// const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
//     STYLES[0],
//   );
//   const [statusBarTransition, setStatusBarTransition] = useState<
//     'fade' | 'slide' | 'none'
//   >(TRANSITIONS[0]);
//   const changeStatusBarStyle = () => {
//     const styleId = STYLES.indexOf(statusBarStyle) + 1;
//     if (styleId === STYLES.length) {
//       setStatusBarStyle(STYLES[0]);
//     } else {
//       setStatusBarStyle(STYLES[styleId]);
//     }
//   };

//   const changeStatusBarTransition = () => {
//     const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
//     if (transition === TRANSITIONS.length) {r
//       setStatusBarTransition(TRANSITIONS[0]);
//     } else {
//       setStatusBarTransition(TRANSITIONS[transition]);
//     }
//   };
  
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          style="light"
          // hidden={hidden}
        />
      <View style={styles.container}>
      
        <MyWebComponent/>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%", height: "100%",
  }, webview: {
    width: deviceWidth,
    height: deviceHeight
  }
});
