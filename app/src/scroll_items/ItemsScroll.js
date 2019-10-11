import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

import {ListaItems, Items} from './ItemsStyle';

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
import ForceofNature from '../assets/Items/Forceofnature.png';
import FrozzenHeart from '../assets/Items/FrozzenHeart.png';

    //G
import GiantsBelt from '../assets/Items/GiantsBelt.png';
import Glacial from '../assets/Items/Glacial.png';
import GuardianAngel from '../assets/Items/GuardianAngel.png';

    //H
import HextechGunblade from '../assets/Items/HextechGunblade.png';
import Hush from '../assets/Items/Hush.png';
import Hydra from '../assets/Items/Hydra.png';

    //I
import IE from '../assets/Items/IE.png';
import IonicSpark from '../assets/Items/IonicSpark.png';

    //K
import KnightsVow from '../assets/Items/KnightsVow.png';

    //L
import Locket from '../assets/Items/Locket.png';
import LudensEcho from '../assets/Items/LudensEcho.png';

    //M
import Morellos from '../assets/Items/Morellos.png';

    //N
import NeedlesslyLargeRod from '../assets/Items/NeedlesslyLargeRod.png';
import Negatron from '../assets/Items/Negatron.png';

    //P
import PD from '../assets/Items/PD.png';

    //R
import Rabadons from '../assets/Items/Rabadons.png';
import rage from '../assets/Items/rage.png';
import Redbuff from '../assets/Items/Redbuff.png';
import Redemption from '../assets/Items/Redemption.png';
import RFC from '../assets/Items/RFC.png';
import runaans from '../assets/Items/runaans.png';

    //S
import serafs from '../assets/Items/serafs.png';
import Shiv from '../assets/Items/Shiv.png';
import Shojin from '../assets/Items/Shojin.png';
import Spat from '../assets/Items/Spat.png';
import SwordBreaker from '../assets/Items/SwordBreaker.png';
import SwordOfTheDivine from '../assets/Items/SwordOfTheDivine.png';

    //T
import Tear from '../assets/Items/Tear.png';
import TemplatBordercopy2 from '../assets/Items/TemplatBordercopy2.png';
import Thornmail from '../assets/Items/Thornmail.png';

    //W
import Warmogs from '../assets/Items/Warmogs.png';

    //Y
import Yuumi from '../assets/Items/Yuumi.png';

    //Z
import Zekesherald from '../assets/Items/Zekesherald.png';

import Drag from '../scroll_items/testeClasse';

import {listaItems} from '../data/ListaItems';

export default function ScrollItems(){

    function teste(id){
        var numero = id - 8;
        
        console.log(numero,BF);
        console.log("Imagem");
    }
    return(
        <ListaItems>
            <Items>
                <Drag />
            </Items>
            {/* A */}
            <Items>
                <TouchableOpacity onPress={teste(8)}>
                    <Image  source={assassin} style={styles.imagem}/>
                </TouchableOpacity>
            </Items>

            {/* B */}
            <Items>
                <Image  source={BF} style={styles.imagem}/>
            </Items>
            <Items>
                <Image  source={BORK} style={styles.imagem}/>
            </Items>
            <Items>
                <Image  source={Bow} style={styles.imagem}/>
            </Items>
            <Items>
                <Image  source={BT} style={styles.imagem}/>
            </Items>

            {/* C */}
            <Items>
                <Image  source={ChainVest}/>
            </Items>
            <Items>
                <Image  source={CursedBlade}/>
            </Items>

            {/* D */}
            <Items>
                <Image  source={Darkin}/>
            </Items>
            <Items>
                <Image  source={DragonClaw}/>
            </Items>

            {/* F */}
            <Items>
                <Image  source={ForceofNature}/>
            </Items>
            <Items>
                <Image  source={FrozzenHeart}/>
            </Items>

            {/* G */}
            <Items>
                <Image  source={GiantsBelt}/>
            </Items>
            <Items>
                <Image  source={Glacial}/>
            </Items>
            <Items>
                <Image  source={GuardianAngel}/>
            </Items>

            {/* H */}
            <Items>
                <Image  source={HextechGunblade}/>
            </Items>
            <Items>
                <Image  source={Hush}/>
            </Items>
            <Items>
                <Image  source={Hydra}/>
            </Items>

            {/* I */}
            <Items>
                <Image  source={IE}/>
            </Items>
            <Items>
                <Image  source={IonicSpark}/>
            </Items>

            {/* K */}
            <Items>
                <Image  source={KnightsVow}/>
            </Items>

            {/* L */}
            <Items>
                <Image  source={Locket}/>
            </Items>
            <Items>
                <Image  source={LudensEcho}/>
            </Items>

            {/* M */}
            <Items>
                <Image  source={Morellos}/>
            </Items>

            {/* N */}
            <Items>
                <Image  source={NeedlesslyLargeRod}/>
            </Items>
            <Items>
                <Image  source={Negatron}/>
            </Items>

            {/* P */}
            <Items>
                <Image  source={PD}/>
            </Items>

            {/* R */}
            <Items>
                <Image  source={Rabadons}/>
            </Items>
            <Items>
                <Image  source={rage}/>
            </Items>
            <Items>
                <Image  source={Redbuff}/>
            </Items>
            <Items>
                <Image  source={Redemption}/>
            </Items>
            <Items>
                <Image  source={RFC}/>
            </Items>
            <Items>
                <Image  source={runaans}/>
            </Items>

            {/* S */}
            <Items>
                <Image  source={serafs}/>
            </Items>
            <Items>
                <Image  source={Shiv}/>
            </Items>
            <Items>
                <Image  source={Shojin}/>
            </Items>
            <Items>
                <Image  source={Spat}/>
            </Items>
            <Items>
                <Image  source={SwordBreaker}/>
            </Items>
            <Items>
                <Image  source={SwordOfTheDivine}/>
            </Items>

            {/* T */}
            <Items>
                <Image  source={Tear}/>
            </Items>
            <Items>
                <Image  source={TemplatBordercopy2}/>
            </Items>
            <Items>
                <Image  source={Thornmail}/>
            </Items>

            {/* W */}
            <Items>
                <Image  source={Warmogs}/>
            </Items>

            {/* Y */}
            <Items>
                <Image  source={Yuumi}/>
            </Items>

            {/* Z */}
            <Items>
                <Image  source={Zekesherald}/>
            </Items>
        </ListaItems>
    );
}

let styles = StyleSheet.create({
    imagem:{
        width: 75,
        height: 100
    }
});