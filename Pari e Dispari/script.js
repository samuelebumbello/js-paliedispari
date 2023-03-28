const pariDispari = prompt('Pari o dispari');
const pari = 'pari';
const dispari = 'dispari';

const paDispari = (pariDispari === pari) ? 'Hai detto pari' :  'Hai detto dispari'
console.log(paDispari);

const numUser =  parseInt(prompt('Inserisci un numero da 1 a 5'));
    
const valNum = numUser;
console.log(valNum);

const numRandom = numRandomPc(1,5);
console.log('numero random computer',numRandom);

function numRandomPc(min, max) {
    randomNumb = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumb;
}

const sommaTotale = sommaNumber(numRandom, valNum);
console.log(sommaTotale);

function sommaNumber (numRandom, valNum) {
    const somma = numRandom + valNum;
    return somma;
}

const end = !(sommaTotale % 2) ? 'hai vinto' : 'Ha vinto il computer'
console.log(end);