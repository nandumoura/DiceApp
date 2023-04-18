/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {SafeAreaView, View} from 'react-native';
import TrueComponent from './components/TrueBox';
import FalseComponent from './components/FalseComponent';

const diceFaces = new Map([
  [1, [true]],
  [2, [true, false, false, true]],
  [3, [true, false, false, false, true, false, false, false, true]],
  [4, [true, true, true, true]],
  [5, [true, false, true, false, true, false, true, false, true]],
  [6, [true, false, true, true, false, true, true, false, true]],
]);
function getDiceValue() {
  return Math.floor(Math.random() * 6) + 1;
}
function App(): JSX.Element {
  const [diceValue, setDiceValue] = useState(() => getDiceValue());
  const diceMap = diceFaces.get(diceValue);

  function rotateDice() {
    setDiceValue(() => getDiceValue());
  }
  function onTouchChangeDice() {
    const rollingDices = setInterval(rotateDice, 100);
    setTimeout(() => {
      clearInterval(rollingDices);
    }, 1100);
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        onTouchStart={onTouchChangeDice}
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 300,
          height: 300,
        }}>
        {diceMap.map((item, idx) => {
          return item ? (
            <TrueComponent key={idx} size={diceMap.length} />
          ) : (
            <FalseComponent key={idx} size={diceMap.length} />
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default App;
