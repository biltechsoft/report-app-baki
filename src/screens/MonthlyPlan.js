import React, {useState} from 'react';
import { Button,StyleSheet,View,Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";




  
const MonthlyPlan = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <React.Fragment>
      
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#a7d49c", "#006ae3"]}
        style={styles.column}>
      
      

      <View style={styles.row}>
      <Text style={styles.leftpart}>QURAN</Text>
      <TextInput 
        placeholder='Ayahs'
        style={styles.button1}
        keyboardType="numeric"
      />
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>HADITH</Text>
      <TextInput 
        placeholder='Hadith'
        style={styles.button1}
        keyboardType="numeric"
      />
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>SALAH</Text>
      <TextInput 
        placeholder='Waqt'
        style={styles.button1}
        keyboardType="numeric"
      />
      </View>


      <View style={styles.row}>
      <Text style={styles.leftpart}>LITERATURE</Text>
      <TextInput 
        placeholder='Pages'
        style={styles.button1}
        keyboardType="numeric"
      />
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>DAWAH</Text>
      <TextInput 
        placeholder='hh:mm'
        style={styles.button1}
        keyboardType="numeric"
      />
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>MEMBER CONTACT</Text>
      <TextInput 
        placeholder='persons'
        style={styles.button1}
        keyboardType="numeric"
      />
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>SOCIAL WORK</Text>
      <TextInput 
        placeholder='hh:mm'
        style={styles.button1}
        keyboardType="numeric"
      />
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>DISTRIBUTION</Text>
      <TextInput 
        placeholder='numbers'
        style={styles.button1}
        keyboardType="numeric"
      />
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>ORG. TIME</Text>
      <TextInput 
        placeholder='hh:mm'
        style={styles.button1}
        keyboardType="numeric"
      />
      </View>

      <View style={styles.row}>
      <Text style={styles.leftpart}>FAMILY MEETING</Text>
      <TextInput 
        placeholder='numbers'
        style={styles.button1}
        keyboardType="numeric"
      />
      
      </View>
      <View style={styles.row}>
      <Text style={styles.leftpart}>SELF-ANALYSIS</Text>
      <TextInput 
        placeholder='Days'
        style={styles.button1}
      />
      
      </View>
      <TextInput 
        placeholder='Comment'
        style={styles.button3}
      />
      <View style={styles.footer}>
      <View style={styles.save_share}>
        <Text style={styles.save_share_text}>SAVE</Text>
      </View> 
        
      <View style={styles.save_share}>
        <Text style={styles.save_share_text}>SHARE</Text>
      </View> 
      </View>
      
      </LinearGradient>

    
      
      
    </React.Fragment>
  
  );
};
  
export default MonthlyPlan;
  
const styles = StyleSheet.create({
  column: {
    flex:18,
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
    marginBottom:10,
    height: 50,
    width: 350,
    padding: 10,
  },
  daily_fields:{
    width:100,
    height:50,
    marginRight:80,
    marginLeft:30,
    padding:10,
  },
  amounts:{
    width:100,
    height:50,
    padding:10,
  },
  leftpart:{
    width:150,
    height:50,
    marginRight:20,
    marginLeft:2,
    padding:10,
    backgroundColor:'#0096FF',
    color:'white',
    fontWeight:'bold'
  },
  footer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  save_share: {
    backgroundColor: 'green',
    width: '40%',
    height: 40,
    marginHorizontal:10,
  },
  save_share_text:{
    marginTop:10,
    textAlign:'center',
    color:'white'
  }
  
});