import { Enum } from "./Enum";
import {altercation} from "./InteractionCreate";
import store from "@/store";
import router from "@/router";

export async function interact(player, npc, action) {
    console.log(player, npc)
    switch (action) {
        case Enum.FIGHT:
            store.commit('newAltercation', "Vous avez Decidé de vous battre");
            await wait(1000);
            if (npc.resistance < player.strength) {
                store.commit('newAltercation', "Vous avez gagné le combat, vous vous calmez");
                await wait(1000);
                store.commit('changePlayerCalm', 10);
                store.commit('changePlayerFrustration', -10);
            } else {
                store.commit('newAltercation', "L'adversaire etait trop fort, vous auriez du reflechir avant de vous battre");
                await wait(1000);
            }
            break;
        case Enum.TALK:
            // Ajoutez des actions pour Enum.TALK si nécessaire
            store.commit('newAltercation', "Vous essayez de raisonné la personne");
            await wait(1000);
            if (player.calm < 20 || player.frustration > 80) {
                store.commit('newAltercation', "Vous etes trop énervé pour parler");
                await wait(1000);
                interact(player, npc, Enum.FIGHT);
            } else {
                if(npc.frustration > 80){
                    store.commit('newAltercation', "La personne est trop énervé pour parler");
                    await wait(1000);
                    interact(player, npc, Enum.GET_FIGHT);
                }else {
                    store.commit('newAltercation', "Vous avez réussi a calmé la personne, vous vous sentez un peu plus frustré");
                    await wait(1000);
                    store.commit('changePlayerCalm', 10);
                    store.commit('changePlayerFrustration', 10);
                }
            }
            break;
        case Enum.GET_FIGHT:
            store.commit('newAltercation', "La personne a essayé de vous frapper");
            if(player.resistance > npc.strength) {
                store.commit('newAltercation', "Vous avez réussi a évité le coup et le battre");
                await wait(1000);
            }
            break;
    }
    altercation(player, npc);
    router.push('/altercation');
}


async function wait(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
