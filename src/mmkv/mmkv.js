import * as React from 'react';

import { StyleSheet, View, TextInput, Alert, Button, Text } from 'react-native';
import { MMKV, useMMKVString } from 'react-native-mmkv';

const storage = new MMKV();

export default function App() {
  const [text, setText] = React.useState<string>('');
  const [key, setKey] = React.useState<string>('');
  const [keys, setKeys] = React.useState<string[]>([]);

  const [example, setExample] = useMMKVString('yeeeet');

  const save = React.useCallback(() => {
    if (key == null || key.length < 1) {
      Alert.alert('Empty key!', 'Enter a key first.');
      return;
    }
    try {
      console.log('setting...');
      storage.set(key, text);
      console.log('set.');
    } catch (e) {
      console.error('Error:', e);
      Alert.alert('Failed to set value for key "test"!', JSON.stringify(e));
    }
  }, [key, text]);
  const read = React.useCallback(() => {
    if (key == null || key.length < 1) {
      Alert.alert('Empty key!', 'Enter a key first.');
      return;
    }
    try {
      console.log('getting...');
      const value = storage.getString(key);
      console.log('got:', value);
      Alert.alert('Result', `"${key}" = "${value}"`);
    } catch (e) {
      console.error('Error:', e);
      Alert.alert('Failed to get value for key "test"!', JSON.stringify(e));
    }
  }, [key]);

  React.useEffect(() => {
    try {
      console.log('getting all keys...');
      const _keys = storage.getAllKeys();
      setKeys(_keys);
      console.log('MMKV keys:', _keys);
    } catch (e) {
      console.error('Error:', e);
    }
  }, []);

  React.useEffect(() => {
    console.log(`Value of useMMKVString: ${example}`);
    const interval = setInterval(() => {
      setExample((val) => {
        return val === 'yeeeet' ? undefined : 'yeeeet';
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [example, setExample]);

  return (
    <View style={styles.container}>
      <Text style={styles.keys}>{'Available Keys: '}{keys.join(', ')}</Text>
      <View style={styles.row}>
        <Text style={styles.title}>{'Key:'}</Text>
        <TextInput
          placeholder="Key"
          style={styles.textInput}
          value={key}
          onChangeText={setKey}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>{'Value:'}</Text>
        <TextInput
          placeholder="Value"
          style={styles.textInput}
          value={text}
          onChangeText={setText}
        />
      </View>
      <Button onPress={save} title="Save to MMKV" />
      <Button onPress={read} title="Read from MMKV" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  keys: {
    fontSize: 14,
    color: 'grey',
  },
  title: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginVertical: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
});

// Implement Cart Screen: Create a screen where users can view and interact with the cart.
// Use the Zustand store to manage the cart state.Integrate MMKV for Storage: Initialize MMKV in your app,
// and use it to persist the cart state. For example:// App.js

// import React, {useEffect} from 'react';
// import {MMKV} from 'react-native-mmkv';
// import {Provider as StoreProvider} from 'use-cart-store'; // Import your Zustand store provider
// const App = () => {
//   useEffect(() => {
//     // Load cart state from MMKV on app start
//     const storedCart = MMKV.getString('cart');
//     if (storedCart) {
//       useCartStore.setState({cart: JSON.parse(storedCart)});
//     }
//   }, []);
//   return <StoreProvider>{/* Your app components */}</StoreProvider>;
// };
// export default App;
