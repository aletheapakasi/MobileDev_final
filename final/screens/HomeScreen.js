import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
     <ImageBackground source={require('../assets/IMG-20191126-WA0027.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Kuliner Minahasa</Text>
           <View style={styles.container}>
           <View style={styles.followButton}>
           <Button 
                title="Makanan Khas"
                onPress={() => navigation.navigate('PlaceManado')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Minuman Khas"
                onPress={() => navigation.navigate('PlaceTomohon')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Kue Khas"
                onPress={() => navigation.navigate('PlaceBitung')}
            />
            </View>
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
      margin : 120
    },
    ukuran:{
        width : 120, height : 120
    },
    followButton: {
      marginTop:10,
      height:50,
      width:200,
      shadowOpacity: 0.60 ,
    //   padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "whitesmoke",
      borderWidth:1,
      borderColor:"#dcdcdc",
    },
  });
export default HomeScreen;
// import React from 'react';
// import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity, FlatList, Dimensions, Alert, ScrollView} from 'react-native';

// const HomeScreen = ({ navigation }) => {
//     return (
//     <ImageBackground source={require('../assets/1.png')} style={{width: '100%', height: '90%'}}>
//        <View>
//            <Text>Home Screen</Text>
//            <View style={styles.container}>
//            <View style={styles.followButton}>
//            <Button 
//                 title="Place of Festival"
//                 onPress={() => navigation.navigate('Place')}
//            />
//            </View>
//            </View>
//        </View>
//     </ImageBackground>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       margin : 40
//     },
//     ukuran:{
//         width : 120, height : 120
//     },
//     followButton: {

//       height:50,
//       width:200,

//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius:30,
//       backgroundColor: "whitesmoke",
//       borderWidth:1,
//       borderColor:"grey",
//     },
//   });
// export default HomeScreen;