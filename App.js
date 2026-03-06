import React from 'react';
import { View } from 'react-native';
import TodoScreen from './screens/Todo';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TodoScreen />
    </View>
  );
}