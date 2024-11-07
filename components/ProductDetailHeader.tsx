import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { IProduct } from '../models/IProducts';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function ProductDetailHeader() {

  const navigation = useNavigation();
  const route = useRoute()
  const item = route.params.item as IProduct

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <TouchableOpacity hitSlop={{top: 10, left: 10, right: 50, bottom: 50}} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={34} color="black" />
          </TouchableOpacity>
        </View>
        <View><Text>{item.title}</Text></View>
        <View><Text>Right</Text></View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: "#83cdf2",
    padding: 8,
  },
  
});
