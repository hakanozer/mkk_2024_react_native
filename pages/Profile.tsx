import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { backgroundColor } from '../utils/theme';
import { useNavigation } from '@react-navigation/native';
import { Hoshi } from 'react-native-textinput-effects';


export default function Profile() {

const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("UseMaps") } >
        <Text style={{fontSize: 20, marginBottom: 20,}}>Goto Map</Text>
        <Hoshi
          label={'E-Mail'}
          // this is used as active border color
          borderColor={'#b76c94'}
          // active border height
          borderHeight={3}
          inputPadding={16}
          // this is used to set backgroundColor of label mask.
          // please pass the backgroundColor of your TextInput container.
          backgroundColor={'#F9F7F6'}
        />
        <Hoshi
          label={'Password'}
          // this is used as active border color
          borderColor={'#b76c94'}
          // active border height
          borderHeight={3}
          inputPadding={16}
          // this is used to set backgroundColor of label mask.
          // please pass the backgroundColor of your TextInput container.
          backgroundColor={'#F9F7F6'}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 8,
    paddingTop: 40,
  },
  
});
