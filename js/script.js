//stampare in html 5 numeri casuali (math random tra due numeri in un ciclo settato a 5 ripetizioni)
//settiamo un timer di 30s con setTimeout
//allo scadere del setTimeout facciamo in modo che i 5 numeri scompaiano
//crea 5 prompt nei quali chiedi all'utente di iserire i numeri che ha visto in ordire numerico (uno in ogni prompt)
//l'utente inserisce i numeri nei prompt
//scrivo in html quanti e quali numeri ha azzeccato l'utente nei prompt

//VARIABILI GLOBALI

let printRandomNumbers = document.querySelector('.random-numbers'); //stampa dei Nrandom

let printFinalResult = document.querySelector('.result');//stampa del risultato finale

let randomNumbers;

let arrRandomNum = [];

//stampa dei 5 numeri casuali
for (let i = 0; i < 5; i++) {
    do {
    randomNumbers = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    } while (arrRandomNum.includes(randomNumbers)); //eliminare i duplicati
    arrRandomNum.push(randomNumbers);
    console.log(randomNumbers);
    printRandomNumbers.innerHTML = arrRandomNum;
}

//setTimeout x eliminare i 5 numeri dall'html

setTimeout(numbersDisapper, 30000);

function numbersDisapper() {
    
    printRandomNumbers.innerHTML = '';

}

//setTimeout per visualizzare i 5 prompt
let arrRememberNum = [];
let rememberNumbers;

setTimeout(enterNumbers, 31000);

function enterNumbers() {
    for (let i = 0; i < 5; i++) {
        rememberNumbers = parseInt(prompt('Scrivi numero che ricordi'));
        arrRememberNum.push(rememberNumbers);
    }
    guessNumbers = compareArray(arrRandomNum, arrRememberNum);
    console.log(guessNumbers);

    if (finalArray.length == 5) {
        printFinalResult.innerHTML = 'Hai indovinato tutti e 5 i numeri, eccoli qui:' + finalArray;
    } else if (finalArray.length == 0) {
        printFinalResult.innerHTML = 'Non hai indovinato alcun numero, riprova!';
    } else {
        printFinalResult.innerHTML = `Hai indovinato: ${finalArray.length} numeri su 5, i numeri che hai indovinato sono: ${finalArray}`;
    }
}


// funzione per comparare i due Array!
let guessNumbers = compareArray(arrRandomNum, arrRememberNum);
const finalArray = [];
    function compareArray(arrRandomNum, arrRememberNum) {
        
        arrRandomNum.forEach((element1) => arrRememberNum.forEach((elemento2)=>
        {if (element1 === elemento2) {
            finalArray.push(element1);
            console.log(finalArray)
        }}));
    }
    