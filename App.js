import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './components/reducer';
import BookList from './components/BookList';

const client = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));


export default class App extends Component {

 
  render() {

    return (
      <Provider store={store}>
      <View style={styles.container}>
        <BookList />
      </View>
    </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});

