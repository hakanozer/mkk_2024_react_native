import React, {useState} from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


// import pages
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

const MainStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

// Login Stack
const LoginStack = () =>
<MainStack.Navigator>
  <MainStack.Screen name="Login" component={Login} options={{ headerShown: false, }}   />
  <MainStack.Screen name="Register" component={Register}  />
</MainStack.Navigator>


// Products Stack
const ProductsStack = () =>
<MainStack.Navigator>
  <MainStack.Screen name="Products" component={Products} options={{ headerShown: false, }}   />
</MainStack.Navigator>

// Main Tabs
const MainTab = () => 
<Tab.Navigator>
  <Tab.Screen
  options={{
    tabBarLabel: 'Products',
    tabBarIcon: ({ color, size }: any) => (
      <Ionicons name="basket-outline" size={40} color={color} />
    ),
  }}
  name="ProductsStack" 
  component={ProductsStack} />
</Tab.Navigator>


export default function App() {

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="LoginStack" component={LoginStack} options={{ headerShown: false, }}  />
        <MainStack.Screen name="MainTab" component={MainTab} options={{ headerShown: false, }}  />
      </MainStack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
});
