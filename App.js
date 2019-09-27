import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import * as Colors from '@pxblue/colors';
import Datalist from './components/DataList';

export default function App() {
  return (
    <View style={styles.container}>
        <Header
          backgroundColor={Colors.blue[500]}
          centerComponent={{ text: 'Multiselect list', style: { color: '#fff', fontSize: 16, } }}
        />
        <Datalist />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
