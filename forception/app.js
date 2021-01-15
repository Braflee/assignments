let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let alphArr = alphabet.split("")

function forception(peeps, alph){

    const finalArr = [];

    for(let i = 0; i < peeps.length; i++){
        finalArr.push(peeps[i] + ":")

        for(let j = 0; j < alph.length; j++){
            finalArr.push(alph[j])
        }
    }
    return finalArr
}
console.log(forception(people, alphArr))


