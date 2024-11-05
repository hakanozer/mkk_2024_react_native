import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


export default function ProductItem( props: {item:any} ) {

  return (
    <View style={styles.container}>
      <Text> {props.item.title} </Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1,
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  
});
