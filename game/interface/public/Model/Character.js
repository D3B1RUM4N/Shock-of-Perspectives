let colors = ["African", "Asian", "Caucasian"];
let sexes = ["Men", "Woman"];
let outfits = ["Casual", "Streetwear", "Chic", "Dojo"];

const STATS_BY_COLOR = {
    0: { frustration: 10, calm: 10, resistance: 10, strength: 10 },     //african
    1: { frustration: 10, calm: 10, resistance: 10, strength: 10 },     //asian
    2: { frustration: 10, calm: 10, resistance: 10, strength: 10 }      //caucasian
};

const STATS_BY_SEXE = {
    0: { frustration: 10, calm: 10, resistance: 10, strength: 10 },     //femme
    1: { frustration: 10, calm: 10, resistance: 10, strength: 10 }      //homme
};

const STATS_BY_OUTFIT = {
    0: { frustration: 10, calm: 10, resistance: 10, strength: 10 },     //casual
    1: { frustration: 10, calm: 10, resistance: 10, strength: 10 },     //streetwear
    2: { frustration: 10, calm: 10, resistance: 10, strength: 10 },     //chic
    3: { frustration: 10, calm: 10, resistance: 10, strength: 10 }      //dojo
};

export default class Character {
    frustration
    calm
    resistance
    strength
    colorI
    sexeI
    outfitI

    constructor() {
        this.frustration = 0;
        this.calm = 0;
        this.resistance = 0;
        this.strength = 0;
        this.colorI = 0;
        this.sexeI = 0;
        this.outfitI = 0;
    }
    initStats() {
        this.updateStats(STATS_BY_COLOR[this.colorI]);
        this.updateStats(STATS_BY_SEXE[this.sexeI]);
        this.updateStats(STATS_BY_OUTFIT[this.outfitI]);
    }

    updateStats(stats) {
        this.frustration += stats.frustration;
        this.calm += stats.calm;
        this.resistance += stats.resistance;
        this.strength += stats.strength;
    }
    setStats(stats) {
        this.frustration = stats.frustration;
        this.calm = stats.calm;
        this.resistance = stats.resistance;
        this.strength = stats.strength;
    }

    //getters
    getColor() {return colors[this.colorI]}
    getSexe() {return sexes[this.sexeI]}
    getOutfit() {return outfits[this.outfitI]}
    characterString() {return this.getColor() + this.getSexe() + this.getOutfit()}

    getStats() {
        return {
            frustration: this.frustration,
            calm: this.calm,
            resistance: this.resistance,
            strength: this.strength
        }
    }

    //setters
    changeSexe() {
        if(this.sexeI < 1) {
            this.sexeI++;
        }else{
            this.sexeI--;
        }
        return this.characterString()
        //router.push('/customisation');
    }
    changeOutfit(direction) {
        //dojo
        if(direction > 1){
            this.outfitI = 3;
            return this.characterString()
        }
        this.outfitI += direction;
        switch (this.outfitI) {
            case -1:
                this.outfitI = 2;
                break;
            case 3:
                this.outfitI = 0;
                break;
        }
        return this.characterString()
        //router.push('/customisation');
    }
    changeColor(_color) {
        if(_color < 0 || _color > 2)
            return this.characterString()
        this.colorI = _color;
        return this.characterString()
    }
}