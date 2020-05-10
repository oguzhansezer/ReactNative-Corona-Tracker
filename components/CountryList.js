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
import { SearchBar } from 'react-native-elements';


const CountryList = ()=> {

  const response = [
    {
        Country: "Turkiye",
        Dead: "3,689",
        Saved: "86,396",
        Active: "137K"
      },
      {
        Country: "Almanya",
        Dead: "7,510",
        Saved: "138K",
        Active: "218K"
      },
      {
        Country: "İtalya",	
        Dead: "30.201",
        Saved: "99.023",
        Active:"171K"

      },
      
]
const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
const [search = "", setSearch] = useState([])
const [fullData,setFullData] = useState([])

useEffect(() => {
  fetch('https://api.covid19api.com/summary')
    .then((response) => response.json())
    .then((json) => {
      setData(json.Countries)
      setFullData(json.Countries)
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);

const updateSearch = search => {
  setSearch(search);
  if(search && search.length && search.length>0) {
    let result = fullData.filter(word => word.Country.indexOf(search) > -1);
    setData(result)
  }
  else {
    setData(fullData)
  }
};  
const handleOnClearText = () => {
  if(search != null)
      search.focus()
}  




  return (
    
    
       <View style={{}}>
         <SearchBar
        placeholder="Ülke ara..."
        lightTheme={true}
        onChangeText={updateSearch}
        value={search}
        onClear={handleOnClearText}
        containerStyle={{marginBottom:20,padding:0,borderRadius:50,marginLeft:10,marginRight:10}}
        inputContainerStyle={{backgroundColor:'#f2f2f2',paddingLeft:10,borderRadius:14}}
        cancelButtonTitle="Cancel"
        

      />
       <View style={styles.infoImage}> 
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/images/rip.png')} style={styles.ratingImage}/>
            <Text style={styles.ratingText}>Ölüm</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/images/masked.png')} style={styles.ratingImage2}/>
            <Text style={styles.ratingText}>İyileşen</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/images/coronavirus.png')} style={styles.ratingImage2}/>
            <Text style={styles.ratingText}>Aktif Vaka</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/images/plus.png')} style={styles.ratingImage2}/>
            <Text style={styles.ratingText}>Günlük Vaka</Text>
          </View>

        </View>




      {isLoading ? <ActivityIndicator/> : (
        
         data.map((item, i) => (
           <View key={i} style={{backgroundColor:'#f2f2f2'}}>
          <Text style={styles.contentdivider}>
          </Text>
          <ListItem 
                    key={i}
                    titleStyle={{ color: 'black', fontWeight: 'bold',marginBottom:5 }}
                    subtitleStyle={{ color: 'black' }}
                    title={item.Country}
                    subtitle= {
                      <View style={{flexDirection:'row'}}> 
                        <View style={{flexDirection:'row'}}>
                          <Image source={require('../assets/images/rip.png')} style={styles.ratingImage}/>
                          <Text style={styles.ratingText}>{item.TotalDeaths}</Text>
                        </View>
                      
                        <View style={{flexDirection:'row'}}>
                          <Image source={require('../assets/images/masked.png')} style={styles.ratingImage2}/>
                          <Text style={styles.ratingText}>{item.TotalRecovered}</Text>
                        </View>

                        <View style={{flexDirection:'row'}}>
                          <Image source={require('../assets/images/coronavirus.png')} style={styles.ratingImage2}/>
                          <Text style={styles.ratingText}>{item.TotalConfirmed}</Text>
                        </View>

                        <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/images/plus.png')} style={styles.ratingImage2}/>
                        <Text style={styles.ratingText}>{item.NewConfirmed}</Text>
                      </View>
                      
                      </View>

                    }
                    containerStyle = {styles.contentContainer}
                   />
                   </View>
        ))
      )}
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
  },
  contentdivider: {
    margin:0,
    backgroundColor:'#f2f2f2'
  },
  contentContainer: {
    borderRadius:25,
  },
  infoImage: {
    flexDirection: 'row',
    paddingLeft:18,
    paddingBottom:5
  }
})



export default CountryList;

/*
 <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
       <View>
         
         {
        
           <Text>
           {data.Country}
           </Text>
        
         }
         </View>
      )}
    </View>
  

      <View style={styles.infoImage}> 
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/images/rip.png')} style={styles.ratingImage}/>
            <Text style={styles.ratingText}>Ölüm</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/images/healthy.png')} style={styles.ratingImage2}/>
            <Text style={styles.ratingText}>İyileşen</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/images/coronavirus.png')} style={styles.ratingImage2}/>
            <Text style={styles.ratingText}>Aktif Vaka</Text>
          </View>

      </View>
      {
        response.map(item=> {
          return (
                <View>
                 <Text style={styles.contentdivider}>
                 </Text>
                  <ListItem 
                    key={item.Country}
                    titleStyle={{ color: 'black', fontWeight: 'bold' }}
                    subtitleStyle={{ color: 'black' }}
                    title={item.Country}
                    subtitle= {
                      <View style={{flexDirection:'row'}}> 
                        <View style={{flexDirection:'row'}}>
                          <Image source={require('../assets/images/rip.png')} style={styles.ratingImage}/>
                          <Text style={styles.ratingText}>{item.Dead}</Text>
                        </View>
                      
                        <View style={{flexDirection:'row'}}>
                          <Image source={require('../assets/images/healthy.png')} style={styles.ratingImage2}/>
                          <Text style={styles.ratingText}>{item.Saved}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Image source={require('../assets/images/coronavirus.png')} style={styles.ratingImage2}/>
                          <Text style={styles.ratingText}>{item.Active}</Text>
                        </View>
                      
                      </View>

                    }
                    containerStyle = {styles.contentContainer}
                    rightTitle = {
                      <Text> 
                        <Image source={require('../assets/images/rip.png')} style={styles.ratingImage}/>
                      </Text>
                    }
                   />
                   </View>
          )     
        })  
      }
*/