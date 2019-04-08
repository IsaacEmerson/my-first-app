/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';
import styles from './src/assets/styles/main';

const login = (username, password) => {
  axios.post('/user', {
    email: username,
    password: password
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { data : []};
  }
  componentWillMount(){
    // request HTTP
    // Make a request for a user with a given ID
    axios.get('https://api.github.com/')
    .then(response => { this.setState({ data: response.data});})
    .catch(() => {console.log('deu merda')});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
        />
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
        />
        <View style={styles.buttonView}>
          <TouchableHighlight>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
