import Altercation from "./Altercation";
import Character from "./Character";

export default class TutoAltercation extends Altercation {

    constructor(_text) {
        let _player = new Character()
        for(let i = 0; i < Math.floor(Math.random() * 100)%2; i++){
            _player.changeSexe()
        }
        _player.changeOutfit(Math.floor(Math.random() * 3))
        _player.changeColor(Math.floor(Math.random() * 3))
        _player.initStats()

        super(_text, _player);
    }

    newNPC(){
        let npc = new Character()
        for(let i = 0; i <  Math.floor(Math.random() * 100)%2; i++){
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