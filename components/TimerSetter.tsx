import React, {useState, useCallback, useMemo} from 'react';
import { Text, View, TextInput } from "react-native";

export default function TimerSetter({ setTimerTime }) {

  return ( 
    <View>
      <Text>Enter number of minutes: </Text>
      <TextInput
        className="border-2"
        onChangeText={setTimerTime}
        keyboardType="numeric"
      />
    </View>
  );
}