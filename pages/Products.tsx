import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import ProductItem from '../components/ProductItem';
import { backgroundColor } from '../utils/theme';

const arr = [
  {"id": 1, "title": "TV"},
  {"id": 2, "title": "Laptop"},
  {"id": 3, "title": "Smartphone"},
  {"id": 4, "title": "Tablet"},
  {"id": 5, "title": "Headphones"},
  {"id": 6, "title": "Bluetooth Speaker"},
  {"id": 7, "title": "Smartwatch"},
  {"id": 8, "title": "Keyboard"},
  {"id": 9, "title": "Mouse"},
  {"id": 10, "title": "Monitor"},
  {"id": 11, "title": "Gaming Console"},
  {"id": 12, "title": "Camera"},
  {"id": 13, "title": "Printer"},
  {"id": 14, "title": "Scanner"},
  {"id": 15, "title": "External Hard Drive"},
  {"id": 16, "title": "Flash Drive"},
  {"id": 17, "title": "Router"},
  {"id": 18, "title": "Smart Light Bulb"},
  {"id": 19, "title": "Air Purifier"},
  {"id": 20, "title": "Electric Kettle"},
  {"id": 21, "title": "Microwave Oven"},
  {"id": 22, "title": "Blender"},
  {"id": 23, "title": "Coffee Machine"},
  {"id": 24, "title": "Washing Machine"},
  {"id": 25, "title": "Refrigerator"},
  {"id": 26, "title": "Dishwasher"},
  {"id": 27, "title": "Vacuum Cleaner"},
  {"id": 28, "title": "Iron"},
  {"id": 29, "title": "Fan"},
  {"id": 30, "title": "Air Conditioner"},
  {"id": 31, "title": "Electric Heater"},
  {"id": 32, "title": "Food Processor"},
  {"id": 33, "title": "Electric Toothbrush"},
  {"id": 34, "title": "Shaver"},
  {"id": 35, "title": "Hair Dryer"},
  {"id": 36, "title": "Razor"},
  {"id": 37, "title": "Microwave Popcorn Maker"},
  {"id": 38, "title": "Ice Cream Maker"},
  {"id": 39, "title": "Toaster"},
  {"id": 40, "title": "Rice Cooker"},
  {"id": 41, "title": "Electric Griddle"},
  {"id": 42, "title": "Smart Thermostat"},
  {"id": 43, "title": "Fitness Tracker"},
  {"id": 44, "title": "Digital Camera"},
  {"id": 45, "title": "Projector"},
  {"id": 46, "title": "Car Dashcam"},
  {"id": 47, "title": "Portable Power Bank"},
  {"id": 48, "title": "Gamepad"},
  {"id": 49, "title": "Drone"},
  {"id": 50, "title": "VR Headset"}
]

export default function Products() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={arr}
        renderItem={ ({item, index}: any) => 
          <ProductItem item={item} key={index} />
        }
      />
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
