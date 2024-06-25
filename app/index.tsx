import { useEffect, useState } from "react";
import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import { StyledComponent } from "nativewind";
import Time from "../components/Time";
import Controls from "../components/Controls";

export default function Index() {
  const [status,setStatus]=useState(-1);
  const [time,setTime]=useState(120);
  const handleStart=()=>{
    setStatus(1);
  };
  const handlePause=()=>{
      setStatus(status===0?1:0);
  };
  const handleStop=()=>{
      setStatus(-1);
  };
  const reset=()=>{
    setTime(120);
  }

  useEffect(() => {
    let timerID;
    if(status===1) {
        timerID = setInterval(() => {
            setTime((time) => time - 1);
        },1000)
    }else {
        clearInterval(timerID)
        if(status === -1)
        reset();
    }
    return ()=>{clearInterval(timerID)}
  },[status])

  return ( 
    <View className="flex-1 items-center justify-center">
      <StatusBar />
      <Text className="text-5xl">Timer</Text>
      <Time time={time} />
      <Controls
        status={status}
        handleStart={handleStart}
        handlePause={handlePause}
        handleStop={handleStop}
        />
    </View>
  );
}
