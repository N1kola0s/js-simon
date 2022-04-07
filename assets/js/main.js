/* Simon Says 

Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


/* 
- div nell html
- document.querySelector() || getElementById()
- var numbers = array
- math random() / copio da w3school la funzione per i numbers
-while
-if
-array.includes()
-innerHTML
-setTimeout(funzione, 3000)
-for
-prompt
-parsInt o Number
-operatore logico

- ?

*/

//Visualizzare in pagina 5 numeri casuali.

// 1. Seleziono elemento della dom dove inserire i numeri casuali 

const numberElement = document.querySelector(".numbers")
// 2. Creare variabile dove salvare i numeri 

const randomNumbers = [];

// 3.generare 5 numeri casuali (che non si ripetono)

while (randomNumbers.length !== 5){
    const number = Math.floor(Math.random()*100)
    if(!randomNumbers.includes(number)){
        randomNumbers.push(number);

    }
}

numberElement.innerHTML = `Memorizza questi numeri: ${randomNumbers}`;




//faccio partire un timer di 30 secondi

// 1.imposto il set timeout a 30 secondi

setTimeout(() => {

    //rimuovere dalla dom i numeri mostrati
    numberElement.innerHTML = " "
    
    // l'utente deve inserire , uno alla volta , i numeri che ha visto precedentemente, tramite un prompt()

    //2. faccio un ciclo e chiedo all'utente di inserire un numero di quelli visti
    const user_attempts = []

    for(let i = 0; i < 5; i++){
        const user_number = Number(prompt(`Inserisci uno dei numeri che hai visto prima`));
        console.log(user_number);
        if(randomNumbers.includes(user_number) && !user_attempts.includes(user_number)){
        user_attempts.push(user_number)
    }
}

console.log(user_attempts);



/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 

-array che contiene i numeri inserite dall'utente(solo che combaciano con i numeri mostrati).
-condizionale
-operatore logico

*/

alert(`Hai indovinato ${user_attempts.length} su ${randomNumbers.length} - I numeri indovinati sono ${user_attempts}`)


}, 30000)



/* function generateNumbers( total_numbers, numbers_limit,){

    // 2. Creare variabile dove salvare i numeri 

    const randomNumbers = [];

    // 3.generare 5 numeri casuali (che non si ripetono)

    while (randomNumbers.length !== total_numbers){
    const number = Math.floor(Math.random()*numbers_limit)
    if(!randomNumbers.includes(number)){
        randomNumbers.push(number);

    }
}
return randomNumbers;

}

const randomNumbers = generateNumbers(5, 100);
console.log(randomNumbers);

numberElement.innerHTML = `Memorizza questi numeri: ${randomNumbers}`; */









