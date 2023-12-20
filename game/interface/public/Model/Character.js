import Statistic from "./Statistic";

let colors = ["Africain", "Asiatique", "Caucasien"];
let sexes = ["Homme", "Femme"];
let outfits = ["Casual", "Streetwear", "Chic", "Dojo"];

const STATS_BY_COLOR = {
    0: { frustration: 15, calm: 10, resistance: 5, strength: 10 },     // African
    1: { frustration: 10, calm: 15, resistance: 10, strength: 15 },     // Asian
    2: { frustration: 12, calm: 12, resistance: 12, strength: 12 }      // Caucasian
};

const STATS_BY_SEXE = {
    0: { frustration: 12, calm: 15, resistance: 18, strength: 15 },     // Femme
    1: { frustration: 15, calm: 12, resistance: 15, strength: 18 }      // Homme
};

const STATS_BY_OUTFIT = {
    0: { frustration: 15, calm: 18, resistance: 10, strength: 12 },     // Casual
    1: { frustration: 18, calm: 12, resistance: 15, strength: 15 },     // Streetwear
    2: { frustration: 10, calm: 15, resistance: 12, strength: 18 },     // Chic
    3: { frustration: 5, calm: 10, resistance: 10, strength: 10 }      // Dojo
};


export default class Character {
    statistics
    colorI
    sexeI
    outfitI

    constructor() {
        this.colorI = 0;
        this.sexeI = 0;
        this.outfitI = 0;
        this.statistics = new Statistic();
    }
    initStats() {
        this.randomize(STATS_BY_COLOR[this.colorI], 10)
        this.randomize(STATS_BY_SEXE[this.sexeI], 10)
        this.randomize(STATS_BY_OUTFIT[this.outfitI], 10)
    }

    randomize(stats, range) {
        if(Math.floor(Math.random() * 100)%2 === 0) {
            this.statistics.updateFrustration(stats.frustration + Math.floor(Math.random()*range));
        }else{
            this.statistics.updateFrustration(stats.frustration - Math.floor(Math.random()*range));
        }
        if(Math.floor(Math.random() * 100)%2 === 0) {
            this.statistics.updateCalm(stats.calm + Math.floor(Math.random()*range));
        }else{
            this.statistics.updateCalm(stats.calm - Math.floor(Math.random()*range));
        }
        if(Math.floor(Math.random() * 100)%2 === 0) {
            this.statistics.updateResistance(stats.resistance + Math.floor(Math.random()*range));
        }else{
            this.statistics.updateResistance(stats.resistance - Math.floor(Math.random()*range));
        }
        if(Math.floor(Math.random() * 100)%2 === 0) {
            this.statistics.updateStrength(stats.strength + Math.floor(Math.random()*range));
        }else{
            this.statistics.updateStrength(stats.strength - Math.floor(Math.random()*range));
        }
    }

    updateStats(stats) {
        this.statistics.updateStats({
            frustration: stats.frustration,
            calm: stats.calm,
            resistance: stats.resistance,
            strength: stats.strength
        })
    }
    setStats(stats) {
        this.statistics.setStats({
            frustration: stats.frustration,
            calm: stats.calm,
            resistance: stats.resistance,
            strength: stats.strength
        })
    }

    //getters
    getColor() {return colors[this.colorI]}
    getSexe() {return sexes[this.sexeI]}
    getOutfit() {return outfits[this.outfitI]}
    characterString() {return this.getColor() + this.getSexe() + this.getOutfit()}

    getStats() {return this.statistics.getStats()}

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