import { useEffect, useState } from "react";
import { Text, View, StatusBar, TouchableOpacity, Button } from "react-native";
import { Link } from "expo-router";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timer from './timer';
import TimerSetter from '../components/TimerSetter'

function HomeScreen({ navigation }) {
  const [timerTime, setTimerTime] = useState(0);
  return (
    <View className="flex-1 items-center justify-center space-y-5">
      <StatusBar />
      <TimerSetter setTimerTime={setTimerTime} />
      <Button title="Start Timer" onPress={() => navigation.navigate('Timer', { timerTime: timerTime * 60 })} />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function Index() {

  return ( 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Timer" component={Timer} />
      </Stack.Navigator>
  );
}
