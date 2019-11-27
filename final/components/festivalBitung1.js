import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet} from 'react-native';

const festivalBitung1 = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/a.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Kelapatart</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/IMG-20191126-WA0030.jpg')}
            />
            </View>
            <Text>Resep</Text>
            <Text>Bahan :</Text>
            <Text>- 125 gr tepung terigu serba guna</Text>
            <Text>- 175 gr gula pasir</Text>
            <Text>- 100 gr margarin Blue Band Cake and Cookie</Text>
            <Text>4 butir kuning telur</Text>
            <Text>300-400 ml air kelapa</Text>
            <Text>50 gr susu bubuk</Text>
            <Text>Garam dan vanili secukupnya</Text>
            <Text>Bahan Isian</Text>
            <Text>30 gr kismis</Text>
            <Text>30 gr kacang kenari panggang</Text>
            <Text>Daging buah kelapa muda secukupnya</Text>
            <Text>Bahan Topping</Text>
            <Text>4 butir putih telur</Text>
            <Text>25 gr gula pasir</Text>
            <Text>100 gr kismis</Text>
            <Text>25 gr kacang kenari yang sudah dicincang kasar</Text>
            <Text>1 sdt kayumanis bubuk</Text>

            <Text>Cata Membuat :</Text>
            <Text>1.Campur semua bahan utama pada sebuah wadah. Aduk perlahan-lahan sampai semua bahan tercampur merata. Kemudian saring untuk menyisihkan bahan-bahan yang menggumpal.</Text>
            <Text>2 Rebus campuran adonan tersebut pada sebuah panci sembari terus diaduk. Masukkan bahan isian kemudian aduk kembali hingga mengental. Jika adonan terlalu kental, Anda bisa menambahkan sedikit sisa air kelapa muda.</Text>
            <Text>3 Bila adonan sudah mendidih dan matang, tuang ke dalam cetakan yang terbuat dari aluminium foil. Kemudian panggang dengan api sedang hingga matang.</Text>
            <Text>4 Sambil menunggu kue klapertart matang, Anda bisa mulai membuat topping.</Text>
            <Text>5 Kocok campuran putih telur dan gula hingga kaku. Lalu masukkan ke dalam plastik segitiga.</Text>
            <Text>6 Saat kue Klapertart sudah matang, keluarkan dari oven dan semprotkan topping pada permukaannya. Lalu tabur kacang kenari panggang dan kismis di atasnya.</Text>
            <Text>7 Panggang kembali selama 15 menit hingga topping-nya matang.</Text>
            <Text>8 Kue Klapertart yang sudah matang bisa diberi taburan kayumanis bubuk sebagai pelengkap.</Text>
            <Text>9 Kue Klapertart lebih nikmat disajikan dalam keadaan dingin. Jadi sebaiknya Anda memasukkan kue yang satu ini ke dalam kulkas selama minimal 2 jam sebelum disajikan.</Text>

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
export default festivalBitung1;