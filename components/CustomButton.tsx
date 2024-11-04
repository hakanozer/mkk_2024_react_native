import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';

export default function CustomButton ( props:{ title: string, fncAction:() => void } ) {
  return(
        <TouchableOpacity onPress={ props.fncAction }>
          <View style={styles.btnSingleView}>
            <Text style={styles.btnText}>{props.title}</Text>
          </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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