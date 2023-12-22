import { GameController } from "@/assets/js/controllers/game.controller";

export class Character {
    name
    specs

    constructor (name, specs) {
        const { gender, skin, csp } = specs

        this.name  = name
        this.specs = new CharacterOptions(gender, skin, csp)
    }
}

export class CharacterOptions {
    gender
    skin
    csp

    constructor (gender, skin, csp) {
        this.gender = gender
        this.skin   = skin
        this.csp    = csp
    }

    selectGender (gender) {
        this.gender = gender
    }
    selectSkin (skin) {
        this.skin = GameController.SKINS[skin]
    }
    selectCsp (csp) {
        this.csp = csp
    }
    nextGender (direction) {
        const { GENDERS } = GameController
        const index = GENDERS.indexOf(this.gender)
        const next = index + direction
        this.selectGender(GENDERS[next >= GENDERS.length ? 0 : (next < 0 ? GENDERS.length - 1 : next)])
    }
    nextCsp (direction) {
        const { CSPS } = GameController
        const index = CSPS.indexOf(this.csp)
        const next = index + direction
        this.selectCsp(CSPS[next >= CSPS.length ? 0 : (next < 0 ? CSPS.length - 1 : next)])
    }

    buildRequestOptions () {
        return {
            gender: this.gender,
            skin: this.skin,
            csp: this.csp
        }
    }

    buildImageURI (direction) {
        return `${this.skin}${this.gender}${this.csp}${direction}.png`
    }
}
