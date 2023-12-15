let colors = ["African", "Asian", "Caucasian"];
let sexes = ["Men", "Woman"];
let outfits = ["Casual", "Streetwear", "Chic"];

export function Character() {
    this.frustration = 0
    this.calm = 0
    this.resistance = 0
    this.strength = 0

    this.colorI = 0
    this.sexeI = 0
    this.outfitI = 0
}

function getColor(character) {
    return colors[character.colorI]
}

function getSexe(character) {
    return sexes[character.sexeI]
}

function getOutfit(character) {
    return outfits[character.outfitI]
}

export function characterString(character) {
    return getColor(character) + getSexe(character) + getOutfit(character)
}

export function changeSexe(character) {
    if(character.sexeI < 1) {
        character.sexeI++;
    }else{
        character.sexeI--;
    }
    return characterString(character)
    //router.push('/customisation');
}

export function changeOutfit(character, direction) {
    character.outfitI += direction;
    switch (character.outfitI) {
        case -1:
            character.outfitI = 2;
            break;
        case 3:
            character.outfitI = 0;
            break;
    }
    return characterString(character)
    //router.push('/customisation');
}

export function changeColor(character, _color) {
    character.colorI = _color;
    return characterString(character)
    //router.push('/customisation');
}