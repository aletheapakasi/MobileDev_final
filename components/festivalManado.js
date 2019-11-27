import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet} from 'react-native';

const festivalManado = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Bubur Manado</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/IMG-20191126-WA0036.jpg')}
            />
            </View>
            <Text>Resep</Text>
            <Text>Bahan :</Text>
            <Text>150 gram beras</Text>
            <Text>1.800 ml air</Text>
            <Text>1 sendok makan garam</Text>
            <Text>100 gram labu kuning, potong kota</Text>
            <Text>50 gram ubi jalar, dipotong kotak</Text>
            <Text>1 buah jagung, sisir</Text>
            <Text>1 ikat kangkung, yang sudah disangrai</Text>
            <Text>4 lonjor (30 gram) kacang panjang, dipotong 2 cm</Text>
            <Text> kurang dari 1 batang daun kemangi</Text>
            <Text>25 gram daun melinjo muda</Text>

            <Text>Pelengkap:</Text>
            <Text>150 gram ikan gabus asin, potong kotak 1 cm, goreng</Text>

            <Text>Cara Membuat :</Text>
            <Text>1. Rebus beras, garam, dan air sambil diaduk sampai setengah matang.</Text>
            <Text>2. Masukkan labu kuning, ubi jalar, dan jagung. Masak sampai 3/4 sampai matang.</Text>
            <Text>3. Tambahkan kangkung, bayam, kacang panjang, daun kemangi, dan daun melinjo. Aduk sampai matang.</Text>
            <Text>4. Sajikan bersama pelengkap.</Text>


       </View>
    </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin : 60
    },
    ukuran:{
        width : 120, height : 120
    }
  });

export default festivalManado;