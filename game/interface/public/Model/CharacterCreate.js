let colors = ["African", "Asian", "Caucasian"];
let sexes = ["Men", "Woman"];
let outfits = ["Casual", "Streetwear", "Chic"];


let colorI= 0
let sexeI= 0
let outfitI= 0

let character= {
    color: colors[colorI],
    sexe: sexes[sexeI],
    outfit: outfits[outfitI]
}

export function characterString() {
    console.log(character.color + character.sexe + character.outfit)
    return character.color + character.sexe + character.outfit;
}

export function changeSexe() {
    if(character.sexeI < 1) {
        character.sexeI++;
    }else{
        character.sexeI--;
    }
    //router.push('/customisation');
}