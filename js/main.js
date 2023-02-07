// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// on load
const gridEl = document.getElementById("grid");
generatore(gridEl);



// costanti


//FUNZIOINI//
function generatore(grid) {
    for (let i = 0; i < 100; i++) {

        const squareEl = document.createElement("div");

        squareEl.classList.add("square");

        
        squareEl.addEventListener(
            "click",
            function () {
                console.log(this);
                this.classList.toggle("active");
                console.log(squareEl);
            }
            )
        grid.append(squareEl);
            
    }
}