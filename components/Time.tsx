import { Text, View } from "react-native";

export default function Time({time}) {

  const transformMinutes=()=>{
    const convertedValue= Math.floor((time / 60) % 60);
    const formattedValue=("0" +convertedValue).slice(-2)
    return formattedValue
  }
  const transformSeconds=()=>{
    const convertedValue= Math.floor(time % 60);
    const formattedValue=("0" +convertedValue).slice(-2)
    return formattedValue
  }

  return ( 
    <Text className="text-6xl">{transformMinutes()} : {transformSeconds()}</Text>
  );
}
