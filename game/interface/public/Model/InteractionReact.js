import { Enum } from "./Enum";
import store from "@/store";
import router from "@/router";

export function interact(player, npc, action) {
    switch (action) {
        case Enum.FIGHT:
            if (npc.resistance < player.strength) {
                store.commit('changeCalm', -10);
                store.commit('changeFrustration', -10);
            } else {
                console.log("game over");
            }
            break;
        case Enum.TALK:
            // Ajoutez des actions pour Enum.TALK si nécessaire
            break;
    }

    router.push('/stats');
}
