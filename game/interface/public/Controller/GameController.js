import Character from "../Model/Character";
import store from "@/store";
import router from "@/router";
import Altercation from "../Model/Altercation";

export default class GameController{
    player
    nbAltercation = 5
    altercations = []

    constructor(){
        this.player = new Character();
        store.commit('setController', this);
    }

    getCharacter(){return this.player;}
    //return last altercation
    getAltercation(){return this.altercations[this.altercations.length - 1];}

    setCharacter(character){this.player = character; store.commit('setController', this);}

    newAltercation(){
        if(this.nbAltercation > 0) {
            this.nbAltercation--;

            let altercation = new Altercation("Vas manger du poulet", this.player);
            this.altercations.push(altercation);
        }
    }
}

export function initGame(){
    return new GameController();
}