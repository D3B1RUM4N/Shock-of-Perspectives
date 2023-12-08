import store from "@/store";

let npc;
npc = {
    calm: 0,
    resistance: 50,
}

export function newNPC() {
    //random stat
    npc.calm = Math.floor(Math.random() * 100);
    npc.resistance = Math.floor(Math.random() * 100);

    store.commit('newNPC', npc);
    store.commit('changeNbInteractions', -1);

    return npc;
}

export function altercation(player, npc) {
    // s'occupé des origines des joueurs
    return "vas manger du poulet"
}

