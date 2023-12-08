import { Enum } from "./Enum";
import store from "@/store";
import router from "@/router";

export function interact(player, npc, action) {
    console.log(player, npc)
    switch (action) {
        case Enum.FIGHT:
            if (npc.resistance < player.strength) {
                store.commit('changePlayerCalm', -10);
                store.commit('changePlayerFrustration', -10);
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
