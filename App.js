import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <View style={styles.root}>
      <WebView
        source={{html: require('./utils/renderHtml').template()}}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEnabled={false}
        onMessage={e => {
          console.log(e.nativeEvent.data);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default App;
