import store from '@/store'
import { Altercation, Reaction } from '@/assets/js/models/altercation.model'
import { Character, CharacterOptions } from '@/assets/js/models/character.model'
import { Session } from '@/assets/js/models/session.model'
import { randomString } from '@/assets/js/utils/strings.utils'

export class GameController {
    // Criteria
    static GENDERS = []
    static SKINS = []
    static CSPS = []
    // Mock lists
    static CHARACTERS = []
    static REACTIONS = []
    static STATISTICS = []
    // Game data
    characterOptions = new CharacterOptions('Homme', 'Caucasien', 'Streetwear')
    character = undefined
    altercation = undefined
    session = undefined

    // STORE
    storeStatistics (statistics) {
        GameController.STATISTICS = [...statistics]
    }
    storeCharacters (characters) {
        GameController.CHARACTERS = [...characters]
    }
    storeGenders (genders) {
        GameController.GENDERS = [...genders]
    }
    storeSkins (skins) {
        GameController.SKINS = [...skins]
    }
    storeCsps (csps) {
        GameController.CSPS = [...csps]
    }
    storeReactions (reactions) {
        GameController.REACTIONS = [...reactions]
    }
    storeSession (session) {
        this.storeCharacter (session.characterName)
        this.session = new Session(session.code, session.name, this.character)
    }
    storeCharacter (name) {
        this.character = new Character(name, this.characterOptions)
    }

    // SETTERS
    setAltercation (payload) {
        this.altercation = new Altercation(payload)
    }

    // GAME METHODS
    static switchAltercation () {
        store.dispatch('nextAltercation')
    }
    static createSession (characterOptions) {
        store.dispatch('createSession', characterOptions.buildRequestOptions())
    }
    react (reaction) {
        store.dispatch('react', {
            altercation: this.altercation.id,
            reaction: reaction.id
        })
    }
}

export class Resume {
    statistics
    history

    constructor (statistics, history) {
        this.statistics = statistics
        this.history    = history
    }
}
