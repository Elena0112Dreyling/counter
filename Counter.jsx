import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

const Counter = ({initialCounterValue}) => {
    const [ count, setCount ] = useState(initialCounterValue);
    const [ textColor, setTextColor ] = useState('orange');

    const onCounterPress = () => {
        setCount(count + 1);
        
        if (count > 50) {
          setTextColor('green');
        } else {
            setTextColor('orange');
        }

        if(count >= 100){
            setCount(0);
        }
      }
        
    return (
        <View>
            <Text> </Text>
            <Text> </Text>
            <Button onPress={() => onCounterPress()} title="Click Me"/>
            <Text style = {{color: textColor}}>You clicked me {count} times</Text>
        </View>
    );
};

export default Counter;