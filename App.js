import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      {showLogin ? (
        <Login onSignupPress={() => setShowLogin(false)} />
      ) : (
        <Signup />
      )}
    </View>
  );
}