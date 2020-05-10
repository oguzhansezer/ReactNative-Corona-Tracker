import React, { useState,useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  Platform
} from 'react-native'

const GlobalList = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [date,setDate] = useState([])
    
    useEffect(() => {
      fetch('https://api.covid19api.com/summary')
        .then((response) => response.json())
        .then((json) => {
          setData(json.Global)
          let d = json.Date

            var dt = d.toString().split(/[: T-]/).map(parseFloat);
            let newDate = new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
            newDate = newDate.toString()
            let GMTText = newDate.indexOf('GMT')

          setDate(newDate.slice(0,GMTText))
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return(
        <View style={{flex: 1}}>
        {isLoading ? <ActivityIndicator/> : (
        <View style={{alignItems:'center',marginTop:50}}> 
            <View style={{flexDirection:'row',marginBottom:25}}>
                <View style={{flexDirection:'column',alignItems:'center',backgroundColor: '#fff',borderRadius:10,padding:20}}>
                  <Image source={require('../assets/images/rip.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>Ölüm:  </Text>
                  <Text> {data.TotalDeaths}</Text>
                </View>
            
                <View style={{flexDirection:'column',alignItems:'center',backgroundColor: '#fff',marginLeft:20,borderRadius:10,padding:20}}>
                  <Image source={require('../assets/images/masked.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>İyileşen: </Text>
                  <Text> {data.TotalRecovered}</Text>
                </View>
            </View>
            
            <View style={{flexDirection:'row',marginTop:25}}>
                <View style={{flexDirection:'column',alignItems:'center',backgroundColor: '#fff',borderRadius:10,padding:20}}>
                  <Image source={require('../assets/images/coronavirus.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>Toplam Vaka </Text>
                  <Text> {data.TotalConfirmed}</Text>
                </View>
            
                <View style={{flexDirection:'column',alignItems:'center',backgroundColor: '#fff',marginLeft:20,borderRadius:10,padding:20}}>
                  <Image source={require('../assets/images/plus.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}> Günlük Vaka:</Text>
                  <Text>  {data.NewConfirmed} </Text>
                </View>
            </View>

           </View> 
        )}
        <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Son güncelleme:  {date}</Text>
        </View>
        </View>
    )



}

const styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
      height: 60,
      width: 60,
      margin:20
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    },
    contentdivider: {
      margin:0
    },
    contentContainer: {
      borderRadius:25
    },
    infoImage: {
      flexDirection: 'row',
      paddingLeft:18
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
      },
      tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
      },
  })
  

export default GlobalList