import React from 'react'
import { StyleSheet, View, Linking} from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { backgroundColor } from '../utils/theme';
import MapView, {Marker} from 'react-native-maps'


export default function UseMaps() {

  const arr = [
    {lat: 41.1107487, long: 29.0322717, title: 'İSTİNYE WEDDİNG HOUSE', desc: 'İstinye, Katar Cd NO:17, 34500 Sarıyer/İstanbul'},
    {lat: 41.1104917, long: 29.0358188, title: 'Merkezi Kayıt Kuruluşu A.Ş.', desc: 'Reşitpaşa Mah., Borsa İstanbul Cad. No:4, 34467 Emirgan-Sarıyer/İstanbul'},
    {lat: 41.1083073, long: 29.0302423, title: 'İTÜ ARI Teknokent', desc: 'İTÜ Arı Teknokent No:4 İç Kapı No:1101, 34485 Sarıyer'}
  ]
  
  return (
    <View style={styles.container}>
      <MapView
        style={{width: '100%', height: 300,}}
        initialRegion={{
          latitude: 41.1172864,
          longitude: 29.0357248,
          latitudeDelta: 0.022,
          longitudeDelta: 0.022,
        }}
      >
      {arr.map((item, index) => 
        <Marker
          key={index}
          coordinate={{latitude: item.lat, longitude: item.long}}
          title={item.title}
          description={item.desc}
          onPress={() => 
            // Linking.openURL("maps://app?saddr="+item.desc) 
            Linking.openURL("tel:+905436429595") 
          }
         />
      )}
      </MapView>
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
