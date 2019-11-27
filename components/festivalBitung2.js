import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

const festivalBitung2 = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/a.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Kue basah Pinende khas Manado </Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/IMG-20191126-WA0033.jpg')}
            />
            </View>
            <Text>Resep</Text>
            <Text>Bahan :</Text>
            <Text>375 grm tepung beras ketan, 3/4 butir kelapa sedang, parut memanjang/singgat, Garam secukupnya, 100 ml air panas, 1 ltr minyak goreng, 150 grm gula pasir, 100 ml air, 1 lmbr daun pandan wangi</Text>
            
            <Text>Cara Membuat</Text>
            <Text>1.	Campur tepung beras ketan, kelapa dan garam.</Text>
            <Text>2.	Tuangkan air panas sedikit demi sedikit sambil di uleni hingga adonan tidak melekat di tangan.</Text>
            <Text>3.	Bentuk adonanan bulat sebesar bola bekel.</Text>
            <Text>4.	Tekan bagian tengahnya perlahan hingga agak pipih.</Text>
            <Text>5.	Panaskan minyak, goreng adonan di atas api sedang hingga kuning kecoklatan. Angkat dan tiriskan. Sisihkan.</Text>
            <Text>6.	Campur gula merah, gula pasir, daun pandan dan air. Rebus di atas api kecil sambil di aduk hingga mendidih dan agak kental. Angkat.</Text>
            <Text>7.	Isi mangkuk ketan dengan larutan gula merah. Hias sesuai selera.</Text>
            <Text>8.	Kue pinende siap disajikan.</Text>


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
export default festivalBitung2;