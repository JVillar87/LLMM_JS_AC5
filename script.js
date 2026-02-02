/* TASCA 1*/

// mouseover, dblclick, mouseout, contextmenu - ratolí
//keydown - teclat

let imatge = document.querySelector("#imatge");

let vermell = document.querySelector("#vermell");
let blau = document.querySelector("#blau");
let verd = document.querySelector("#verd");
let taronja = document.querySelector("#taronja");
let groc = document.querySelector("#groc");
let lila = document.querySelector("#lila");

let clickEsquerra = 0;
let clickDreta = 0;
let mouseOver = 0;
let tecles = 0;
let teclesG = 0;

imatge.addEventListener("click", () => {
    clicksEsquerra++;
    vermell.innerHTML = clickEsquerra;
});

imatge.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // evita menú contextual
    clickDreta++;
    blau.innerHTML = clickDreta;
});


imatge.addEventListener("mouseover", () => {
    mouseOver++;
    verd.innerHTML = mouseOver;
});


document.addEventListener("keydown", (e) => {
    tecles++;
    taronja.innerHTML = tecles;

   
    groc.innerHTML = e.key;

    
    if (e.key === "g" || e.key === "G") {
        teclesG++;
        lila.innerHTML = teclesG;
    }
});

/* TASCA 2 */
let btnCrear = document.querySelector("#btnCrear");
let llista = document.querySelector("#llista");

let contadorElements = 0;

btnCrear.addEventListener("click", crearElements);
function crearElements() {
    let nouElement = document.createElement("li");
    nouElement.textContent = "Aquest és l'element " + (contadorElements + 1) + " de la llista.";
    llista.append(nouElement);
    contadorElements++;
}
