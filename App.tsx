import React, {useState} from 'react'
import { Text, StyleSheet, TextInput, View, Image } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import CustomButton from './components/CustomButton';
import { backgroundColor } from './utils/theme';


export default function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const fncLogin = () => {
    console.log(username, password)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', }}>
        <Image source={ require('./assets/logo.png') } />
      </View>
      <Text style={styles.textTitle}>User Login</Text>
      <TextInput autoCapitalize='none' onChangeText={ (txt) => setUsername(txt) } placeholder='Username' style={styles.txtInput}/>
      <TextInput secureTextEntry onChangeText={ (txt) => setPassword(txt) } placeholder='Password' style={styles.txtInput}/>
      <View style={styles.btnView}>
        <CustomButton title='Login' fncAction={fncLogin} />
        <CustomButton title='Register' fncAction={fncLogin} />
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
