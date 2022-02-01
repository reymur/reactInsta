import React from 'react';
import {HomeScreen} from './src/screen/HomeScreen';
import {Message} from './src/assets/icons/Message.ico';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />

        <HomeScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
