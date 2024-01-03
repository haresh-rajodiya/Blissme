import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Feather from 'react-native-vector-icons';
// import { Feather } from '@expo/vector-icons';
// import { Switch } from 'react-native-switch';
import Switch from '../Switch';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        barHeight={30}
        switchWidth={50}
        switchHeight={20}
        value={isEnabled}
        onValueChange={toggleSwitch}
        disabled={false}
        backgroundActive={'#0095ff'}
        backgroundInactive={'#d1d1d1'}
        circleActiveColor={'white'}
        circleInActiveColor={'white'}
        // renderInsideCircle={() => <CustomComponent />} /
        changeValueImmediately={true}
        innerCircleStyle={{
          borderWidth: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        outerCircleStyle={{}}
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={3}
        switchRightPx={3}
        switchWidthMultiplier={2}
        switchBorderRadius={30}
      />
      <Text>{'\n'}</Text>
      {/* <TouchableOpacity
        onPress={toggleSwitch}
        style={{
          backgroundColor: isEnabled ? '#0095ff' : '#d1d1d1',
          borderRadius: 100,
          padding: 10,
        }}>
        <Feather
          name={isEnabled ? 'check-circle' : 'circle'}
          size={25}
          color="white"
        />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
