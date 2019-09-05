import {createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';
import Campeoes from './pages/Campeoes';
import Items from './pages/Items';
import Builds from './pages/Builds';
import Jogo from './pages/Jogo';

export default createAppContainer(
   // Iniciar = createSwitchNavigator({
     //   Login,
       // Main,
    //}), 

    createBottomTabNavigator({
        Login,
        Main,
        Campeoes,
        Items,
        Builds,
        Jogo
    })
);