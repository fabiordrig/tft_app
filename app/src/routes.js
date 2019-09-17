import {createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Main from './pages/Main';
import Campeoes from './pages/Campeoes';
import Items from './pages/Items';
import Builds from './pages/Builds';
import Jogo from './pages/Jogo';

const Entrada = createStackNavigator({
  Login: Login,
});

const App =    createBottomTabNavigator({
  Main : Main,
  Campeoes : Campeoes,
  Items : Items,
  Builds : Builds,
    Jogo : Jogo,
  });

export default createAppContainer(
  createSwitchNavigator({
       Login : Entrada,
       Main: App,
   }), 
   {
    initialRouteName: 'Login',
  }
);