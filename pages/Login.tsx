import React, {useState} from 'react'
import { Text, StyleSheet, TextInput, View, Image } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { backgroundColor } from '../utils/theme';
import { useNavigation } from '@react-navigation/native';
import { dataModel } from '../models/dataModel';
import { userLogin } from '../services/loginService';
import Toast from 'react-native-toast-message';
import { storeUser } from '../utils/storeUser';


export default function Login() {

  const navigation = useNavigation();

  const [username, setUsername] = useState('mor_2314')
  const [password, setPassword] = useState('83r5^_')

  const fncLogin = () => {
    userLogin(username, password).then(res => {
      const user = res.data
      user.id = 2
      storeUser(user).then(() => {
        navigation.replace("MainTab")
      })
      console.log(res.data.token)
    }).catch(err => {
      Toast.show({
        type:'error',
        text1: err.message,
        visibilityTime: 2000
      })
    })
  }

  const sendItem:dataModel = {
    id: '200',
    title: 'TV',
    age: 30
  }
  const fncGotoRegister = () => {
    navigation.navigate("Register", { id: 100, item: sendItem })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', }}>
        <Image source={ require('../assets/logo.png') } />
      </View>
      <Text style={styles.textTitle}>User Login</Text>
      <TextInput defaultValue={username} autoCapitalize='none' onChangeText={ (txt) => setUsername(txt) } placeholder='Username' style={styles.txtInput}/>
      <TextInput defaultValue={password} secureTextEntry onChangeText={ (txt) => setPassword(txt) } placeholder='Password' style={styles.txtInput}/>
      <View style={styles.btnView}>
        <CustomButton title='Login' fncAction={fncLogin} />
        <CustomButton title='Register' fncAction={fncGotoRegister} />
      </View>
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
  textTitle: {
    textAlign: 'center',
    fontSize: 30,
  },
  txtInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  btnSingleView: {
    backgroundColor:'#159aed',
    borderRadius: 5,
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
  }
});
