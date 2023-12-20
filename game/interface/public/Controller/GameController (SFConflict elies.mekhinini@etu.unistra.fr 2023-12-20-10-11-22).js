import Character from "../Model/Character";
import store from "@/store";
import router from "@/router";
import Altercation from "../Model/Altercation";
import DojoAltercation from "../Model/DojoAltercation";
import TutoAltercation from "../Model/TutoAltercation";

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
        }else{
            let altercation = new DojoAltercation("vous vous dirigez vers le dojo pour votre entrainement quotidient", this.player);
            altercation.setNPC(altercation.newNPC())
            this.altercations.push(altercation);
        }
    }

    tutoAltercation(){
        let alercation = new TutoAltercation("Bienvenue dans le tuto. Vous rencontrerais des personnes" +
            " dans la rues qui vont vous lancé des pics. A vous de voir comment vous allez reagire a cela. Prennez bien en " +
            "compte quel personnage vous incarnez. Vos choix impacte votre personne ce qui peut faire varié vos prochaines altercation."), this.player);
    }
}

export function initGame(){
    return new GameController();
}