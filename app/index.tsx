import { Text, View, StatusBar, TouchableOpacity, Button } from "react-native";
import { Link } from "expo-router";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timer from './timer';

function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar />
      <Button title="Start Timer" onPress={() => navigation.navigate('Timer', { timerTime: 120 })} />
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
