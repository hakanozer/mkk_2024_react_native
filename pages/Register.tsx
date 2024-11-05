import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { backgroundColor } from '../utils/theme';
import { useRoute } from '@react-navigation/native';
import { dataModel } from '../models/dataModel';


export default function Register() {

  const route = useRoute()
  console.log(route.params.id)

  const item = route.params.item as dataModel
  console.log(item.title)

  return (
    <SafeAreaView style={styles.container}>
      
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
