import { Platform } from 'react-native'
import axios from 'axios'

export const config = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  data: { "platform": Platform.OS  },
  timeout: 15000,
  headers: {"token": "token123"}
  //auth: {username: '', password: ''}
})