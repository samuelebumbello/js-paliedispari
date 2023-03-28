// creo un prompt per chiedere all'utente di inserire una parola per verificare se è palindroma o no
const parolaUser = prompt('Inserisci la tua parola per verificare se è palindroma')
console.log(parolaUser);

const keyword = palindroma(parolaUser);
console.log(keyword);

if(keyword === parolaUser){
    console.log('La parola è Palindroma');
}else{
    console.log('La parole non è Palindroma');
}



function palindroma(string) {
    //divido la stringa in lettere singole
    const parolaDivide = (string.split(""));

    //inverto l'odrine delle lettere singole
    const parolaInvert = parolaDivide.reverse();

    //unisco le lettere singole in una stringa
    const parolaUnit = parolaInvert.join("");

    return parolaUnit;
}
