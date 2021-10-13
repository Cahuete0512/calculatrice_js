const prompt = require('prompt-sync')({sigint: true});
let choice = parseInt(prompt ('Que voulez vous faire? Additionner = 0, Soustraire = 1, Multipliez = 2, Diviser = 3' + ' : '));
const operation = ["additionner", "soustraire", "multiplier", "diviser"];
console.log(`Vous avez choisi de ${operation[choice]}!`);

let number1 = parseInt(prompt('Veuillez saisir votre premier choix : ' + ' '));
let number2 = parseInt(prompt('Veuillez saisir votre deuxieme choix : '+ ' '));

function additionner(number1, number2){
    var result = number1 + number2;
    console.log('Premiere valeur a additionner : ' + number1);
    console.log('Deuxième valeur a additionner : ' + number2);
    return result;
}
function soustract(number1, number2){
    var result = number1 - number2;
    console.log('Premiere valeur a soustraire : ' + number1);
    console.log('Deuxième valeur a soustraire : ' + number2);
    return result;
}
function multiply(number1, number2){
    var result = number1 * number2;
    console.log('Premiere valeur a multiplier : ' + number1);
    console.log('Deuxième valeur a multiplier : ' + number2);
    return result;
}
function divide(number1, number2){
    var result = number1 / number2;
    console.log('Premiere valeur a diviser : ' + number1);
    console.log('Deuxième valeur a diviser : ' + number2);
    if (number2 <= 0){
        console.log('Tu ne peux pas diviser par un nombre négatif !!!');
    }
    return result;
}

switch(parseInt(choice)){
    case 0:
        result= additionner(number1, number2)
        console.log(number1 +' + '+ number2+' = ' + result );
        break;
    case 1 :
        result = soustract(number1, number2)
        console.log(number1 +' + '+ number2 +' = ' + result );
        break;
    case 2 :
        result = multiply(number1, number2)
        console.log(number1 +' * '+ number2 +' = ' + result );
        break;
    case 3 :
        result = divide(number1, number2)
        console.log(number1 +' / '+ number2 +' = ' + result );
        break;
    default:
        console.log("Aucun resultat possible");
        break;
}
