import React, {useEffect, useState} from 'react'
import { StyleSheet,FlatList, View } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { backgroundColor } from '../utils/theme';
import { useRoute } from '@react-navigation/native';
import { allLikes } from '../utils/storeLikes';
import { singleProduct } from '../services/productService';
import axios from 'axios';
import { IProduct } from '../models/IProducts';
import ProductItem from '../components/ProductItem';
import { useSelector } from 'react-redux';
import { StateType } from '../userRedux/store';


export default function Likes() {
  // redux selector
  const likesArr = useSelector( (item: StateType ) => item.likesReducer )
  const [arr, setArr] = useState<IProduct[]>([])
  const route = useRoute()

  useEffect(() => {
    
      console.log(likesArr)
      //all(likes)
      
      axios.all(likesArr.map(id => singleProduct(id))).then(arrRes => {
        let arr:IProduct[] = []
        arrRes.map(res => {
          console.log(res.data)
          arr.push(res.data)
        })
        setArr(arr)
      })

  }, [likesArr])

  const all = async (likes: number[]) => {
    for(var i = 0; i< likes.length; i++) {
      await singleProduct(likes[i]).then(res => {
          console.log(res.data)
      })
    }
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={arr}
        renderItem={ ({item, index}: any) => 
          <ProductItem item={item} key={index} />
        }
      />
    </View>
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
