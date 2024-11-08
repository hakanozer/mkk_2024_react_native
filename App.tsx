import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

// import pages
import Splash from './pages/Splash';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Likes from './pages/Likes';
import Profile from './pages/Profile';
import UseMaps from './pages/UseMaps';

// Header imports
import ProductDetailHeader from './components/ProductDetailHeader';
import { store } from './userRedux/store';



const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Login Stack
const LoginStack = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Register" component={Register} />
  </MainStack.Navigator>
);

// Products Stack
const ProductsStack = () => (
  <MainStack.Navigator screenOptions={{ headerShown: true }}>
    <MainStack.Screen
      name="Products"
      component={Products}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Detail"
      component={Detail}
      options={{ header: () => <ProductDetailHeader /> }}
    />
  </MainStack.Navigator>
);

// Likes Stack
const LikesStack = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Likes"
      component={Likes}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Detail"
      component={Detail}
      options={{ header: () => <ProductDetailHeader /> }}
    />
  </MainStack.Navigator>
);

// Profile Stack
const ProfileStack = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="UseMaps"
      component={UseMaps}
      options={{ headerShown: true }}
    />
  </MainStack.Navigator>
);

// Main Tabs
const MainTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        //headerShown: false,
        tabBarLabel: 'Products',
        tabBarIcon: ({ color, size }: any) => (
          <Ionicons name="basket-outline" size={40} color={color} />
        ),
      }}
      name="ProductsStack"
      component={ProductsStack}
    />
    <Tab.Screen
      options={{
        //headerShown: false,
        tabBarLabel: 'Likes',
        tabBarIcon: ({ color, size }: any) => (
          <AntDesign name="hearto" size={40} color={color} />
        ),
      }}
      name="LikesStack"
      component={LikesStack}
    />
    <Tab.Screen
      options={{
        //headerShown: false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }: any) => (
          <Ionicons name="person-outline" size={40} color="black" />
        ),
      }}
      name="ProfileStack"
      component={ProfileStack}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="LoginStack"
          component={LoginStack}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="MainTab"
          component={MainTab}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
      <Toast />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
