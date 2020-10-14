import React from 'react';
import {View, Text, Button} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View>
      <Text>Hola</Text>
      <Button title="Login" testID="login-msal" />
    </View>
  );
};

export default App;
