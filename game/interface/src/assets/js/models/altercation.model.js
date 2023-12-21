import store from '@/store'
import { selectRandom } from '@/assets/js/utils/list.utils'
import { GameController } from '@/assets/js/controllers/game.controller'

export class Altercation {
    id
    label
    dojo
    character

    constructor (payload) {
        const { id, label, dojo } = payload

        this.id        = id
        this.label     = label
        this.dojo      = dojo
        this.character = selectRandom(GameController.CHARACTERS)
    }

    react (reaction) {
        store.dispatch('reactTo', {
            altercation: this.id,
            reaction: reaction.id
        })
    }
}

export class Reaction {
    id
    label
    icon

    constructor (payload) {
        const { id, label, icon } = payload

        this.id    = id
        this.label = label
        this.icon  = icon
    }
}
