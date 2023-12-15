import { Enum } from "./Enum";
import store from "@/store";
import router from "@/router";

export async function interact(player, npc, action) {
    console.log(player, npc)
    switch (action) {
        case Enum.FIGHT:
            if (npc.resistance < player.strength) {
                store.commit('newAltercation', "Vous avez gagné");
                await wait(1000);
                store.commit('changePlayerCalm', -10);
                store.commit('changePlayerFrustration', -10);
            } else {
                console.log("game over");
            }
            break;
        case Enum.TALK:
            // Ajoutez des actions pour Enum.TALK si nécessaire
            if (player.calm < 20 || player.frustration > 80) {
                store.commit('newAltercation', "Vous etes trop énervé pour parler");
                await wait(1000);
                interact(player, npc, Enum.FIGHT);
            } else {
                store.commit('changePlayerCalm', 10);
                store.commit('changePlayerFrustration', 10);
            }
            break;
    }

    router.push('/stats');
}


async function wait(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
