import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

const MyWebComponent = () => {
  return <WebView source={{ uri: 'https://app.furyofthefur.com' }} style={styles.webview} />
}

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyWebComponent/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%", height: "100%"
  }, webview: {
    marginTop: 35,
    width: deviceWidth,
    height: deviceHeight

  }
});
