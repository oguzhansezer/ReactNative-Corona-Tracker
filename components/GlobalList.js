import React, { useState,useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList
} from 'react-native'
import { 
  List,
  ListItem 
} from 'react-native-elements'

const GlobalList = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
      fetch('https://api.covid19api.com/summary')
        .then((response) => response.json())
        .then((json) => {
          setData(json.Global)
          console.log(json.Global) 
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return(
        <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
        <View> 
           
            
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/images/rip.png')} style={styles.ratingImage}/>
              <Text style={styles.ratingText}>TotalDeaths: {data.TotalDeaths} </Text>
            </View>
  
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/images/healthy.png')} style={styles.ratingImage2}/>
              <Text style={styles.ratingText}>TotalRecovered: {data.TotalRecovered} </Text>
            </View>
  
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/images/coronavirus.png')} style={styles.ratingImage2}/>
              <Text style={styles.ratingText}>TotalConfirmed: {data.TotalConfirmed} </Text>
            </View>
  
          
           
           </View>
               
          
        )}
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
      height: 20,
      width: 20,
      marginRight:-5
    },
    ratingImage2: {
      height: 20,
      width: 20,
      marginLeft:10,
      marginRight:-5
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
    }
  })
  

export default GlobalList