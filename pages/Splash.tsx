import React, {useEffect} from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { backgroundColor } from '../utils/theme';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { deleteUser, getUser } from '../utils/storeUser';

export default function Splash() {

  const navigation = useNavigation()

  useEffect(() => {

    setTimeout(() => {
        getUser().then((user => {
            if (user != null) {
              // service control
              navigation.replace("MainTab")
            }else {
              navigation.replace("LoginStack")
            }
          })
        )
    }, 3000)

  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../assets/logo.png')} />
      </View>
      <StatusBar hidden/>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 8,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems:'center',
  },
  
});
