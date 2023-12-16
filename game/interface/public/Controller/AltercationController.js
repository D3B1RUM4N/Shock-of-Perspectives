import Character from "../Model/Character";

export default class AltercationController {
    text
    npc
    constructor(_text) {
        this.setText(_text)
        this.npc = this.newNPC()
    }

    getText(){return this.text}
    getNPC(){return this.npc}

    setText(_text){this.text = _text}

    newNPC(){
        let npc = new Character()
        for(let i = 0; i < Math.floor(Math.random()); i++){
            npc.changeSexe()
        }
        npc.changeOutfit(Math.floor(Math.random() * 3))
        npc.changeColor(Math.floor(Math.random() * 3))
        npc.setStats()
        return npc
    }
}