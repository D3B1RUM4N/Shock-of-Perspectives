import Character from "./Character";
import {Enum} from "./Enum";
import router from "@/router";

export default class Altercation {
    text
    npc
    player
    constructor(_text, _player) {
        this.setText(_text)
        this.npc = this.newNPC()
        this.player = _player
    }


    getText(){return this.text}
    getNPC(){return this.npc}

    setText(_text){this.text = _text}
    setPlayer(_player){this.player = _player}

    newNPC(){
        let npc = new Character()
        if(Math.floor(Math.random() * 100)%2 === 0){
            npc.changeSexe()
        }
        npc.changeOutfit(Math.floor(Math.random() * 2))
        npc.changeColor(Math.floor(Math.random() * 2))
        npc.initStats()
        return npc
    }


    async interact(action) {
        let player = this.player.getStats()
        let npc = this.npc.getStats()
        switch (action) {
            case Enum.FIGHT:
                this.setText("Vous avez Decidé de vous battre");
                await this.wait(1000);
                if (npc.resistance < player.strength) {
                    this.setText("Vous avez gagné le combat, vous vous calmez");
                    await this.wait(1000);
                    //this.player.updateStats()
                    player.calm += 10;
                    player.frustration -= 10;
                } else {
                    this.setText("L'adversaire etait trop fort, vous auriez du reflechir avant de vous battre");
                    await this.wait(1000);
                }
                break;
            case Enum.TALK:
                this.setText("Vous essayez de raisonné la personne");
                await this.wait(1000);
                if (player.calm < 20 || player.frustration > 80) {
                    this.setText("Vous etes trop énervé pour parler");
                    await this.wait(1000);
                    this.interact(Enum.FIGHT);
                } else {
                    if (npc.frustration > 80) {
                        this.setText("La personne est trop énervé pour parler");
                        await this.wait(1000);
                        this.interact(Enum.GET_FIGHT);
                    } else {
                        this.setText("Vous avez réussi a calmé la personne, vous vous sentez un peu plus frustré");
                        await this.wait(1000);
                        player.calm += 10;
                        player.frustration += 10;
                        this.player.setStats(player);
                    }
                }
                break;
            case Enum.GET_FIGHT:
                this.setText("La personne a essayé de vous frapper");
                if (player.resistance > npc.strength) {
                    this.setText("Vous avez réussi a évité le coup et le battre");
                    await this.wait(1000);
                }
                break;
        }
        this.player.setStats(player);
        this.npc.setStats(npc);
        //altercation(player, npc);
    }

    wait(milliseconds) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, milliseconds);
        });
    }
}