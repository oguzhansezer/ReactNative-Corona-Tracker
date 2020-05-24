import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalList from '../components/GlobalList'
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.containerHome}>
      <GlobalList/>
    </View>
       

    
      
  );
}




const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor:'#f2f2f2'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },

});
