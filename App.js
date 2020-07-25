import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Grocery from './screens/Grocery';
import Expences from './screens/Expences';
import Welcome from './screens/Welcome';
import Fitness from './screens/Fitness';
import Study from './screens/Study';


const Tab = createMaterialTopTabNavigator();

export default function App() {
return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Grocery" component={ Grocery} />
      <Tab.Screen name="Expences" component={ Expences} />
      <Tab.Screen name="Fitness" component={ Fitness} />
      <Tab.Screen name="Study" component={ Study} />
   
    
    </Tab.Navigator>
    </NavigationContainer>
  );
}
