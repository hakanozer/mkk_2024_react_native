import React,{useEffect, useState} from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import ProductItem from '../components/ProductItem';
import { IProduct } from '../models/IProducts';
import { allProduct } from '../services/productService';
import { backgroundColor } from '../utils/theme';


export default function Products() {

  const [page, setPage] = useState(0)
  const [arr, setArr] = useState<IProduct[]>([])

  useEffect(() => {
    allProduct().then(res => {
      const productArr = res.data
      setArr(productArr)
      console.log(page)
    })
  }, [page])

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={arr}
        renderItem={ ({item, index}: any) => 
          <ProductItem item={item} key={index} />
        }
        onEndReached={() => setPage(page + 1)}
      />
      
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
