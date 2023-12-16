import Character from "./Character";

export default class Altercation {
    npc
    text
    constructor() {
        this.npc = new Character()
    }

    newNPC(){
        for(let i = 0; i < Math.floor(Math.random()); i++){
            this.npc.changeSexe()
        }
        this.npc.changeOutfit(Math.floor(Math.random() * 3))
        this.npc.changeColor(Math.floor(Math.random() * 3))

        this.npc.setStats()
    }

    getText(){
        return this.text
    }

    setText(text){
        this.text = text
    }
}
