/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';

import { SafeAreaView, NavigationActions } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu',
});

@connect(({ app, loading }) => ({
  app,
  loading: loading.models.app,
}))
class Welcome extends Component {
  state = {
    welcomeText: 'Welcome to React Native!',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'app/loadList' });
  }

  render() {
    const { welcomeText } = this.state;
    const { app, loading } = this.props;
    const { navigation } = this.props;
    const { goBack, popToTop, navigate, reset, replace } = navigation;
    console.log(this.props);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <View style={styles.container}>
          <Text style={styles.welcome}>{welcomeText + app.text}</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          {loading && <Text style={styles.instructions}>加载中</Text>}
          {app.list.map(element => (
            <Text key={element.name} style={styles.instructions}>
              {`${element.name}say:${element.say}`}
            </Text>
          ))}
          <Button onPress={() => goBack()} title="back" />
          <Button onPress={() => popToTop()} title="popToTop" />
          <Button onPress={() => navigate('Home')} title="home" />
          <Button
            onPress={() => reset([NavigationActions.navigate({ routeName: 'Home' })], 0)}
            title="reset to Home"
          />
          <Button onPress={() => replace('Home')} title="replace to Home" />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Welcome;
