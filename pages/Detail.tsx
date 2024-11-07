import React, {useState, useEffect} from 'react'
import { StyleSheet, Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { backgroundColor } from '../utils/theme';
import { useRoute } from '@react-navigation/native';
import { IProduct } from '../models/IProducts';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { likesAddRemove, likesControl } from '../utils/storeLikes';

export default function Detail() {

  const [likesStatus, setLikesStatus] = useState(false)
  const navigation = useNavigation();
  const route = useRoute()
  const item = route.params.item as IProduct
  /*
  navigation.setOptions({
     title: item.title,
   })
   */

  useEffect(() => {
    likesControl(item.id).then(status => {
      setLikesStatus(status)
    })
  }, [])
  
  const likes = () => {
    console.log(item.id)
    likesAddRemove(item.id).then(() => {
      likesControl(item.id).then(status => {
        setLikesStatus(status)
      })
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={{width: '100%', height: 300,}} source={{uri: item.image}} />
        <Text>{item.description}</Text>
        
        <TouchableOpacity onPress={likes}>
          <View style={{alignItems: 'center', marginTop: 10,}}>
            <AntDesign name={likesStatus === true ? 'heart' : 'hearto'} size={30} color={likesStatus === true ? 'red' : 'black'} />
          </View>
        </TouchableOpacity>
        
      </ScrollView>
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
