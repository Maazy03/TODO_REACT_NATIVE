

import React from 'react';

import {View,Text} from "react-native"

import styles from '../Project/styles/styles'


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Screen1  from './Screens/Drawer/Screen1'
import  Screen2  from './Screens/Drawer/Screen2'
// import Screen3 from './Screens/Drawer/Screen3'
import Note from './Screens/Drawer/Note'

import Screen4 from './Screens/Drawer/Screen4';
import Screen5 from './Screens/Drawer/Screen5';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const createMaterialTopTabs = createMaterialTopTabNavigator();

const App= () => {

createHomeStack=()=>
<Stack.Navigator>
<Stack.Screen name="feed" component={Screen4}/> 
<Stack.Screen name="details" component={Screen5} />
</Stack.Navigator>

  return (
    <>
      
<NavigationContainer>

        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Screen1} />
        <Drawer.Screen name="Todo" component={Screen2} />
        {/* <Drawer.Screen name="Note" component={Note} /> */}
            
      </Drawer.Navigator>
</NavigationContainer>
     
    </>
  );
};



export default App;
