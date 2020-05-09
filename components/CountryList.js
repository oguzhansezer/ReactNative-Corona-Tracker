import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import { 
  List,
  ListItem 
} from 'react-native-elements'


const CountryList = ()=> {

  const response = [
    {
        Country: "Turkiye",
        Dead: "3,689",
        Saved: "86,396"
      },
      {
        Country: "Almanya",
        Dead: "7,510",
        Saved: "138K"
      },
      {
        Country: "İtalya",	
        Dead: "30.201",
        Saved: "99.023"

      }
]

  return (
    <View> 
      {
        response.map(item=> {
          return (
            <View> 
                <ListItem 
                  key={item.Country}
                  titleStyle={{ color: 'black', fontWeight: 'bold' }}
                  subtitleStyle={{ color: 'black' }}
                  title={item.Country}
                  subtitle= {
                   <View style={styles.subtitleView}>
                   
                     <Image source={require('../assets/images/dead.png')} style={styles.ratingImage}/>
                     <Text style={styles.ratingText}>{item.Dead}</Text>
                  
                     <Image source={require('../assets/images/recovered.png')} style={styles.ratingImage2}/>
                     <Text style={styles.ratingText}>{item.Saved}</Text>
                  
                   </View>
    
                  }
                  bottomDivider
                  chevronColor={{color:'red'}}
                 />
            </View>
          )
        })
      }
    </View>
  );
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
  }
})



export default CountryList;