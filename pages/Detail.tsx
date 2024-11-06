import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { backgroundColor } from '../utils/theme';
import { useRoute } from '@react-navigation/native';
import { IProduct } from '../models/IProducts';
import { useNavigation } from '@react-navigation/native';

export default function Detail() {

  const navigation = useNavigation();
  const route = useRoute()
  const item = route.params.item as IProduct
  navigation.setOptions({
     title: item.title,
   })

  return (
    <View style={styles.container}>
      <Image style={{width: '100%', height: 300,}} source={{uri: item.image}} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 8,
  },
  
});
