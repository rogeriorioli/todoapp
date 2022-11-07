
import { View, StatusBar, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import Status from '../../components/Status';
import { styles } from './style';

export default function Home() {
  return (
    <>
    <KeyboardAvoidingView behavior="height"  />
    <StatusBar  translucent={true} barStyle="light-content"backgroundColor='#000'/>
    <View style={styles.bgView}>
      <View style={styles.hero}>
          <Logo/>
      </View> 
      <View style={styles.container}>
      <Form/>
      <Status/>
       </View>
    </View>
      </>
  )
}

