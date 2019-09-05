import React from 'react';

import {Image} from 'react-native';

import {ListaItems, ItemCampeao} from './ItemsStyle';

//Imagens dos Itens
    //A
import assassin from '../assets/Items/assassin.png';

    //B
import BF from '../assets/Items/BF.png';
import BORK from '../assets/Items/BORK.png';
import Bow from '../assets/Items/Bow.png';
import BT from '../assets/Items/BT.png';

    //C
import ChainVest from '../assets/Items/ChainVest.png';
import CursedBlade from '../assets/Items/CursedBlade.png';

    //D
import Darkin from '../assets/Items/Darkin.png';
import DragonClaw from '../assets/Items/DragonClaw.png';

    //F

export default function ScrollItems(){
    return(
        <ListaItems>
            {/* A */}
            <ItemCampeao>
                <Image  source={assassin}/>
            </ItemCampeao>

             {/* B */}
            <ItemCampeao>
                <Image  source={BF}/>
            </ItemCampeao>
            <ItemCampeao>
                <Image  source={BORK}/>
            </ItemCampeao>
            <ItemCampeao>
                <Image  source={Bow}/>
            </ItemCampeao>
            <ItemCampeao>
                <Image  source={BT}/>
            </ItemCampeao>

             {/* C */}
            <ItemCampeao>
                <Image  source={ChainVest}/>
            </ItemCampeao>
            <ItemCampeao>
                <Image  source={CursedBlade}/>
            </ItemCampeao>

             {/* D */}
            <ItemCampeao>
                <Image  source={Darkin}/>
            </ItemCampeao>
            <ItemCampeao>
                <Image  source={DragonClaw}/>
            </ItemCampeao>

             {/* F */}
        </ListaItems>
    )
};