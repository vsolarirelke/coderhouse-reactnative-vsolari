import { StyleSheet, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Stars = () => {

  const [randomNumber, setRandomNumber] = useState(0);
  const [difference, setDifference] = useState(0);

  const handlePress = () => {
    const randomNum = Math.floor(Math.random() * 6);
    const diff = 5 - randomNum;
    setRandomNumber(randomNum);
    setDifference(diff);
  };

  useEffect(() => {
    handlePress(); // Execute handlePress when the component mounts
  }, []);

  return (
    <View style={styles.starContainer}>

            {Array.from({ length: randomNumber }).map((_, index) => (
              <FontAwesome style={styles.star} name="star" size={24} color={colors.star} key={index}/>
            ))}
            {Array.from({ length: difference }).map((_, index) => (
              <FontAwesome style={styles.star} name="star-o" size={24} color={colors.star_not} key={index}/>
            ))}

           </View>
  )
}

export default Stars

const styles = StyleSheet.create({
    
    starContainer: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20,
      },
     star: {
        width: 40,
        height: 40,
      },
      
})