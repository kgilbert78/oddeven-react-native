import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, RubikMonoOne_400Regular } from '@expo-google-fonts/rubik-mono-one';
import { useEffect, useState } from "react";
import {
  calculateSwitchTime,
  determineParkingSide,
  isFoolsDay,
} from "./determineParkingSide";
// import About from "./About";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    RubikMonoOne_400Regular,
  });

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

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
    <View style={isEven ? styles.evenContainer : styles.oddContainer}
      className="App"
    >
      <Text style={styles.plainText}>side</Text>
      {isEven ? <Text style={styles.heading}>Even</Text> : <Text style={styles.heading}>Odd</Text>}
      <Text style={styles.heading2}>{new Date().getHours() < 18 ? "Before" : "After"} 6 pm</Text>
      <Text style={styles.heading2}>
        On{" "}
        {new Date().toLocaleDateString("default", {
          month: "long",
          day: "numeric",
        })}
      </Text>
      {foolsDay && (
        <>
          <Text style={styles.heading2}>Warning: Fools day!</Text>
          <Text>Do not move your car tonight! Tomorrow is also an odd day.</Text>
        </>
      )}
      <Text style={styles.plainText}>Next switch in:</Text>
      <Text style={styles.heading3}>
        {hoursToSwitch} hours and {minutesToSwitch % 60} minutes
      </Text>

      {/* TO DO: Translate About contents from HTML to react-native built-in components like <View> and <Text> */}
      {/* <About isEven={isEven} foolsDay={foolsDay} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  evenContainer: {
    flex: 1,
    backgroundColor: '#3369ff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,

  },
  oddContainer: {
    flex: 1,
    backgroundColor: '#f75231',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  heading: {
    fontFamily: 'RubikMonoOne-Regular',
    fontSize: 80,
    color: 'white',
    fontWeight: '800',
    textAlign: 'left'
  },
  heading2: {
    fontSize: 50,
    color: 'black',
    fontWeight: '800'
  },
  heading3: {
    fontSize: 30,
    color: 'black',
    fontWeight: '800'
  },
  plainText: {
    fontSize: 20,
  }
});
