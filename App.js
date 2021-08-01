import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';


const Stack = createStackNavigator();

export default function App() {
  return (
    //navigation container for making menu and home page
    //follow: https://reactnavigation.org/docs/getting-started
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
      //here options for disappear header menu
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}