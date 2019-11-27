import React from 'react';
import { Text, StyleSheet, FlatList, View, ImageBackground, Button} from 'react-native';

// const places = [
//     {Festival: 'Manado Fiesta', Location: 'Kawasan Megamas'},
//     {Festival: 'Christmas Festival', Location: 'Kawasan Megamas'},
//     {Festival: 'Festival Pesona Bunaken', Location: 'Bunaken'},
//     {Festival: 'Telkomsel Langit Musik Pagelaran Festival', Location: 'Kawasan Megamas'},
//     {Festival: 'Figura Festival', Location: 'Kawasan Megamas'}
// ]

const placeManado = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/IMG-20191126-WA0027.jpg')} style={{width: '100%', height: '100%'}}>
            <View >
            <View style={styles.followButton}>
            <Button 
                title="Bubur Manado"
                onPress={() => navigation.navigate('ManadoFest1')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Cakalang Fufu"
                onPress={() => navigation.navigate('ManadoFest2')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Rica Rodo"
                onPress={() => navigation.navigate('ManadoFest3')}
            />
            </View>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin : 20
    },
    ukuran:{
        width : 120, height : 120
    },
    followButton: {
      marginTop:10,
      height:40,
      width:380,
    //   padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:80,
      backgroundColor: "white",
      borderWidth:1,
      borderColor:"black",
    },
  });

export default placeManado;