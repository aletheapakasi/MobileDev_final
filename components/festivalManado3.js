import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet} from 'react-native';

const festivalManado = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Rica Rodo</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/ricarodo.jpg')}
            />
            </View>
            <Text>Resep</Text>
            <Text>Bahan :</Text>
            <Text>1.	10 bh terong ungu</Text>
            <Text>2.	10 bh kacang panjang</Text>
            <Text>3.	200 gr jagung yg di iris kecil"</Text>
            <Text>4.	20 bh cabe rawit</Text>
            <Text>5.	2 cm jahe (saya skip)</Text>
            <Text>6.	2 batang bawang</Text>
            <Text>7.	1 buah sereh</Text>
            <Text>8.	5 bh bawang putih</Text>
            <Text>9.	3 bh bawang merah</Text>
            <Text>10.	4 lembar daun jeruk,buang tulangnya</Text>
            <Text>11.	1 ikat daun kemangi di banyakin biar wangi</Text>
            <Text>12.	1 lembar daun pandan</Text>
            <Text>13.	secukupnya garam dan vetsin</Text>

            <Text>Cara Membuat :</Text>
            <Text>1.	Bersihkan terong di iris agak serong,kacang panjang juga di iris sekitar 3 cm, dan jagung di iris juga</Text>
            <Text>2.	Setelah semua sudah bersih dan di potong,haluskan bawang merah, cabe,dan bwang putih secara bersamaan,kemudian batang bwang di iris sktar 2 cm.</Text>
            <Text>3.	Memarkan sereh, daun pandan potong dua saja, daun jeruk di buang tulangnya,panaskan minyak, setelah panas tumis pertama sereh, daun pandan, kemangi, jahe dan daun jeruk.</Text>
            <Text>4.	Setelah bahan" sudah layu,tambahkan batang bawang yang sudah di iris,setelah batang bawang sudah agak sedikit layu taruh cabe,bawang putih,dan bawang merah yang sudah di haluskan tadi.</Text>
            <Text>5.	Jika bumbu sudah harum,taruh terong dan jagung dan campurkan dengan bumbu,di aduk"sampai terong dan kcang panjang masak,jika sudah masak taruh kacang panjang,(kalo sya kacang panjang hanya sebentar saja di masak,tidak terlalu layu) campurkan ketiga sayur itu tambahkan garam dan vetsin sesuai selera anda sendiri (saya agak asin dan pedas).</Text>



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