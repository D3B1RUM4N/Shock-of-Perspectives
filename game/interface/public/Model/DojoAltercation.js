import Altercation from "./Altercation";
import Character from "./Character";

export default class DojoAltercation extends Altercation {
    constructor(_text, _player) {
        super(_text, _player);
    }

    newNPC(){
        let npc = new Character()
        for(let i = 0; i < Math.floor(Math.random()); i++){
            npc.changeSexe()
        }
        npc.changeOutfit(3)
        npc.changeColor(Math.floor(Math.random() * 3))
        npc.initStats()
        return npc
    }

    setNPC(_npc){
        this.npc = _npc
    }
}