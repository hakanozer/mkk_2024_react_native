import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { IProduct } from '../models/IProducts';
import { useNavigation } from '@react-navigation/native';

export default function ProductItem( props: {item:IProduct} ) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {item: props.item})} >
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.item.image}} />
      <View>
        <Text numberOfLines={2} style={styles.title}> {props.item.title} </Text>
        <Text> {props.item.price}₺ </Text>
      </View>
    </View>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1,
    borderRadius: 5,
    margin: 5,
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    flexShrink: 1,
  }
});
