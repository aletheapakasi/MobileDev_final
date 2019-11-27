import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

const festivalManado2 = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Cakalang Fufu</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/cakalangfufu.jpg')}
            />
            </View>
             <Text>Resep</Text>
             <Text>Bahan :</Text>
            <Text>- Minyak goreng 3 sendok makan</Text>
            <Text>- Daging ikan cakalang asap ½ kg</Text>
            <Text>- Serai geprek (2 batang serai)</Text>
 	          <Text>- Jeruk limau peras (1 buah jeruk limau)</Text>
	          <Text>- Daun kemangi 1 genggam</Text>
            <Text>- Daun jeruk yang dicincang halus (5 lembar daun jeruk</Text>
            <Text>- Lengkuas geprek (2 cm)</Text>
            <Text>- Jahe geprek (3 cm),/</Text>

            <Text>Bumbu Halus Masakan :</Text>
            <Text>- Terasi bakar 1 sendok the</Text>
            <Text>- Cabe merah 8 buah</Text>
            <Text>- Garam dapur 1 sendok teh</Text>
            <Text>- Cabe rawit merah 7 buah</Text>

            <Text>Cara Memasak </Text>
            <Text>1.	Sebelum ikan cakalang yang sudah diasap ini dimasak, terlebih dahulu kita ambil dagingnya dengan cara disuwir-suwir lalu setelahnya digoreng.</Text>
            <Text>2.	Sementara itu, siapkan bumbu halus masakan lalu masak bersama dengan lengkuas, daun jeruk, jahe, dan serai sampai beraroma sedap. Setelah itu, tambahkan masakan bumbu ini dengan suwiran daging cakalang yang telah digoreng selama beberapa saat tadi. Aduk merata agar meresap sempurna.</Text>
            <Text>3.	Agar sajian masakan ikan cakalang fufu ini terasa lebih harum dan gurih, tambahkan juga air perasan jeruk limau dan kemangi ke dalam masakan ikan cakalang fufu. Aduk sekali lagi sampai merata dan tunggu sejenak sampai matang sempurna. Angkat dan sajikan.</Text>


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
export default festivalManado2;