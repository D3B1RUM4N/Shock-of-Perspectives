import Character from "../Model/Character";
import store from "@/store";
import router from "@/router";

export default class GameController{
    player
    constructor(){
        this.player = new Character();

        // custom du character
        store.commit('setController', this);
        router.push('/customisation').then(r => console.log(r));

        store.commit('setController', this);
        router.push('/altercation').then(r => console.log(r));
    }

    getCharacter(){
        return this.player;
    }
    setCharacter(character){
        this.player = character;
    }
}