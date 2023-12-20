export default class Statistic {
    frustration
    calm
    resistance
    strength

    constructor() {
        this.frustration = 0
        this.calm = 0
        this.resistance = 0
        this.strength = 0
    }

    getStats(){
        return {
            frustration: this.frustration,
            calm: this.calm,
            resistance: this.resistance,
            strength: this.strength
        }
    }

    setStats(stats){
        if(stats.frustration > 100) stats.frustration = 100
        if(stats.calm > 100) stats.calm = 100
        if(stats.resistance > 100) stats.resistance = 100
        if(stats.strength > 100) stats.strength = 100
        if(stats.frustration < 0) stats.frustration = 0
        if(stats.calm < 0) stats.calm = 0
        if(stats.resistance < 0) stats.resistance = 0
        if(stats.strength < 0) stats.strength = 0

        this.frustration = stats.frustration
        this.calm = stats.calm
        this.resistance = stats.resistance
        this.strength = stats.strength
    }

    updateStats(stats){
        this.frustration += stats.frustration
        this.calm += stats.calm
        this.resistance += stats.resistance
        this.strength += stats.strength

        if(this.frustration > 100) this.frustration = 100
        if(this.calm > 100) this.calm = 100
        if(this.resistance > 100) this.resistance = 100
        if(this.strength > 100) this.strength = 100
        if(this.frustration < 0) this.frustration = 0
        if(this.calm < 0) this.calm = 0
        if(this.resistance < 0) this.resistance = 0
        if(this.strength < 0) this.strength = 0
    }

    updateFrustration(value){this.frustration += value}
    updateCalm(value){this.calm += value}
    updateResistance(value){this.resistance += value}
    updateStrength(value){this.strength += value}

}