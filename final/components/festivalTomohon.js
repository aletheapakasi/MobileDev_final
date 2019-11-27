import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

const festivalTomohon = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Es kacang Merah</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 200}}
                source={require('../assets/IMG-20191126-WA0025.jpg')}
            />
            </View>
            <Text>Resep</Text>
            <Text>Bahan :</Text>
            <Text>1.	250 gr kacang merah kering</Text>
            <Text>2.	150 gr gula merah/aren</Text>
            <Text>3.	50 gr gula pasir</Text>
            <Text>4.	2 sachet santan instant (@ 65 gr)</Text>
            <Text>5.	400 ml air matang</Text>
            <Text>6.	1/2 sdt garam</Text>
            <Text>7.	1/2 sdt pasta vanili</Text>
            <Text>8.	1 lbr daun pandan</Text>
            <Text>9.	Susu kental manis</Text>
            <Text>10.	serut Es batu/es</Text>

            <Text>cara membuat :</Text>
            <Text>•	Kacang merah cuci bersih lalu presto 30.menit.Setelah kacang empuk tambahkan gula.Lakukan tes rasa.Masak sampai kacang meresap dan air menyusut.</Text>
            <Text>•	Masak bahan B,aduk aduk sampai timbul uap panas,jangan sampai mendidih.(supaya santan tidak beku pd wkt ditambahkan es).dinginkan</Text>
            <Text>•	Menghidangkannya: Isi gelas dengan 2 sdm kacang merah,tuang sedikit santan kemudian masukkan es batu/serut,beri susu kental manis di atasnya.</Text>
            
       </View>
    </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin : 100
    },
    ukuran:{
        width : 120, height : 120
    }
  });

export default festivalTomohon;