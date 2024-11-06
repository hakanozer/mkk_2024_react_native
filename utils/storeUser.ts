import { IToken } from "../models/IToken";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (obj:IToken) => {
  const stObj = JSON.stringify(obj)
  await AsyncStorage.setItem('user', stObj )
}

export const getUser = async () => {
  const stObj = await AsyncStorage.getItem('user')
  if (stObj != null) {
    const user = JSON.parse(stObj) as IToken
    return user
  }else {
    return null
  }
}

export const deleteUser = async () => {
  try {
    await AsyncStorage.removeItem('user')
    return true
  }catch(err) {
    return false
  }
  
}