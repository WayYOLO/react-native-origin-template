/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

import { SafeAreaView } from 'react-navigation';

class Home extends Component {
  state = {
    text: 'Welcome to React Native!',
  };

  render() {
    const { text } = this.state;
    const { navigation } = this.props;
    const { goBack, popToTop, navigate, push } = navigation;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <View style={styles.container}>
          <Text style={styles.instructions}>{text}</Text>
          <Button onPress={() => goBack()} title="back" />
          <Button onPress={() => popToTop()} title="popToTop" />
          <Button onPress={() => navigate('Welcome')} title="go welcome" />
          <Button onPress={() => push('Welcome')} title="push to Welcome" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Home;
