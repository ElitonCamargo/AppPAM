import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import TelaHome from "./Componentes/TelaHome";
import TelaDescricao from "./Componentes/TelaDescricao";
import TelaRotas from "./Componentes/TelaRotas";
import TelaBiblioteca from "./Componentes/TelaBiblioteca";

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator screenOptions={ menuNav } >
        
        <Abas.Screen name="Home" component = { TelaHome } options={home}/>
        <Abas.Screen name="Telas" component = { TelaDescricao } />
        <Abas.Screen name="Rotas" component = { TelaRotas } />
        <Abas.Screen name="Biblioteca" component = { TelaBiblioteca } />
      
      </Abas.Navigator>
    </NavigationContainer>
  )
};

const menuNav = {
  tabBarActiveTintColor: "#8B14FD",
  tabBarInactiveTintColor: "#59B2FF",
  tabBarLabelPosition:"below-icon",
  tabBarActiveBackgroundColor: "#a8a8a8",
  tabBarInactiveBackgroundColor: "#CEDBD1",
}

const home = {
  tabBarIcon:({color})=>(
    <MaterialCommunityIcons name="shield-home-outline" size={24} color={color} />
  )
}

