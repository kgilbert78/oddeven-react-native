import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useEffect, useState } from "react";
import {
  calculateSwitchTime,
  determineParkingSide,
  isFoolsDay,
} from "./determineParkingSide";
// import About from "./About";

export default function App() {
  const [isEven, setIsEven] = useState(determineParkingSide());
  const [switchTime, setSwitchTime] = useState(calculateSwitchTime());
  const [foolsDay, setFoolsDay] = useState(isFoolsDay());

  const minutesToSwitch = Math.round((switchTime - new Date()) / 1000 / 60);
  const hoursToSwitch = Math.floor(minutesToSwitch / 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEven(determineParkingSide());
      setSwitchTime(calculateSwitchTime());
      setFoolsDay(isFoolsDay());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View
      className="App"
    >
      <Text>side</Text>
      {isEven ? <Text>Even</Text> : <Text>Odd</Text>}{/* h1 */}
      <Text>{new Date().getHours() < 18 ? "Before" : "After"} 6 pm</Text>{/* h2 */}
      <Text>
        On{" "}
        {new Date().toLocaleDateString("default", {
          month: "long",
          day: "numeric",
        })}
      </Text>{/* h2 */}
      {foolsDay && (
        <>
          <Text>Warning: Fools day!</Text>{/* h2 */}
          <Text>Do not move your car tonight! Tomorrow is also an odd day.</Text>
        </>
      )}
      <Text>Next switch in:</Text>
      <Text>
        {hoursToSwitch} hours and {minutesToSwitch % 60} minutes
      </Text>{/* h3 */}

      {/* TO DO: Translate About contents from HTML to react-native built-in components like <View> and <Text> */}
      {/* <About isEven={isEven} foolsDay={foolsDay} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
