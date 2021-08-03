import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../assets/colors/colors';

export default function Menu({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.menuLeft}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Home')}
                >
            <Text style={styles.UpperMenuLeft}>Food</Text>
                 </TouchableOpacity>
            <Text style={styles.UpperMenuRight}>Drinks</Text>
            </View>
            <View style={styles.menuRight}>
            <Text style={styles.lowerMenuLeft}>About</Text>
            <Text style={styles.lowerMenuRight}>Contact</Text>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:'50%',
      marginBottom:'50%',
      backgroundColor: colors.primary,
    },
    menuLeft:{
      flexDirection:'row',
      marginTop:'33%',
      marginLeft:'33%',
    },
    UpperMenuLeft:{
      color:colors.secondary,
      fontSize:18,
      width: 90,
      height:40,
      backgroundColor:'white',
      borderRadius:10,
      textAlign:'center',
      paddingTop:7,
    },
    UpperMenuRight:{
        color:colors.secondary,
        fontSize:18,
        width: 90,
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        textAlign:'center',
        paddingTop:7,
        marginLeft:20,
      },
    menuRight:{
        flexDirection:'row',
        marginTop:'5%',
        marginLeft:'33%',
      },
      lowerMenuLeft:{
        color:colors.secondary,
        fontSize:18,
        width: 90,
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        textAlign:'center',
        paddingTop:7,
      },
      lowerMenuRight:{
        color:colors.secondary,
        fontSize:18,
        width: 90,
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        textAlign:'center',
        paddingTop:7,
        marginLeft:20,
      },

  });