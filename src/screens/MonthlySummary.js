import React, {useState} from 'react';
import { Button,StyleSheet,View,Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from 'expo-checkbox';




  
const MonthlySummary = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <React.Fragment>
      
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#a7d49c", "#006ae3"]}
        style={styles.column}>
      
      

      <View style={styles.row}>
      <Text style={styles.daily_fields} >Fields</Text>
      <Text style={styles.amounts}>Total</Text>
      <Text style={styles.amounts}>Avg.</Text>
      </View>
      

      <View style={styles.row}>
      <Text style={styles.leftpart}>QURAN</Text>
      <Text style={styles.inner_amounts}>Ayahs</Text>
      <Text style={styles.inner_amounts}>Ayahs</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>HADITH</Text>
      <Text style={styles.inner_amounts}>Hadiths</Text>
      <Text style={styles.inner_amounts}>Hadiths</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>SALAH</Text>
      <Text style={styles.inner_amounts}>Waqt</Text>
      <Text style={styles.inner_amounts}>Waqt</Text>
      </View>


      <View style={styles.row}>
      <Text style={styles.leftpart}>LITERATURE</Text>
      <Text style={styles.inner_amounts}>Pages</Text>
      <Text style={styles.inner_amounts}>Pages</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>DAWAH</Text>
      <Text style={styles.inner_amounts}>Hours</Text>
      <Text style={styles.inner_amounts}>Hours</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>MEMBER CONTACT</Text>
      <Text style={styles.inner_amounts}>Persons</Text>
      <Text style={styles.inner_amounts}>Persons</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>SOCIAL WORK</Text>
      <Text style={styles.inner_amounts}>Hours</Text>
      <Text style={styles.inner_amounts}>Hours</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>DISTRIBUTION</Text>
      <Text style={styles.inner_amounts}>Numbers</Text>
      <Text style={styles.inner_amounts}>Numbers</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>ORG. TIME</Text>
      <Text style={styles.inner_amounts}>Hours</Text>
      <Text style={styles.inner_amounts}>Hours</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>FAMILY MEETING</Text>
      <Text style={styles.inner_amounts}>Numbers</Text>
      <Text style={styles.inner_amounts}>Numbers</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>SELF-ANALYSIS</Text>
      <Text style={styles.inner_amounts}>days</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>STUDY CIRCLE</Text>
      <CheckBox
          style={styles.checkbox}
          disabled={false}
      />
      <Text style={styles.inner_amounts}>Date</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>Eyanat</Text>
      <CheckBox
          style={styles.checkbox}
          disabled={false}
      />
      <Text style={styles.inner_amounts}>Date</Text>
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>Qiyamul Layl</Text>
      <CheckBox
          style={styles.checkbox}
          disabled={false}
      />
      <Text style={styles.inner_amounts}>Date</Text>
      </View>

      <TextInput 
        placeholder='Comment'
        style={styles.button3}
      />
      </LinearGradient>
      
      <Button
        title="SAVE"
        color="green"
      />
    </React.Fragment>
  
  );
};
  
export default MonthlySummary;
  
const styles = StyleSheet.create({
  column: {
    flex:1,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  row: {
    flex:1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  
  button:{
    flex: 1,
    height: 50,
    width: 100,
  },
  button1:{
    flex: 1,
    height: 50,
    width: 100,
  },
  button3:{
    flex:1,
    marginTop:10,
    marginBottom:5,
    height: 40,
    width: 350,
    padding: 10,
  },
  daily_fields:{
    flex:2,
    width:100,
    height:50,
    marginRight:80,
    marginLeft:30,
    padding:10,
  },
  amounts:{
    flex:1,
    width:100,
    height:50,
    padding:10,
    marginLeft: 5,
    marginRight:20,
  },
  leftpart:{
    flex:2,
    width:150,
    height:40,
    fontSize:10,
    marginRight:20,
    marginLeft:2,
    padding:10,
    backgroundColor:'#0096FF',
    color:'white',
    fontWeight:'bold'
  },
  inner_amounts:{
    flex:1,
    width:100,
    height:40,
    padding:10,
    backgroundColor:'white',
    marginLeft: 10,
  },
  checkbox:{
    alignSelf: 'center',
    backgroundColor:'white',
    marginLeft:30,
    marginRight: 40,
  }
  
});