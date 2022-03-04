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
    randomNumbers = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    console.log(randomNumbers);
    arrRandomNum.push(randomNumbers);
    console.log(arrRandomNum);
    printRandomNumbers.innerHTML = arrRandomNum;
}

//setTimeout x eliminare i 5 numeri dall'html

setTimeout(numbersDisapper, 3000);

function numbersDisapper() {
    
    printRandomNumbers.innerHTML = '';

}

//setTimeout per visualizzare i 5 prompt
let arrRememberNum = [];

setTimeout(enterNumbers, 4000);

function enterNumbers() {
    for (let i = 0; i < 5; i++) {
        let rememberNumbers = parseInt(prompt('Scrivi numero che ricordi'));
        arrRememberNum.push(rememberNumbers);
        console.log(arrRememberNum);
    }
}




