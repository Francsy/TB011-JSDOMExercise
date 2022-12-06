// PRIMER EJERCICIO: 
// Añadir dos elementos <li> a un <ul>, y unirlos al DOM de tu página HTML
// Usar:
// 	- innerHTML
// 	- appendChild()
// 	- createElement()
// 	- createAttribute()
// 	- createTextNode()



//Creamos un elemento que apunta al div
const nido1 = document.getElementById("my-div")

//Creamos el título de la lista:
const titular = document.createElement("h1")

// //Anidamos el título en el div
nido1.appendChild(titular)

// //Creamos el texto
const textoTitular = document.createTextNode("Lista de cosas por aprender")

//Anidamos el texto en el titular
titular.appendChild(textoTitular)

//Creamos un ul que está flotando
const listaDesordenada = document.createElement("ul")

// //Anidamos el ul en el div
nido1.appendChild(listaDesordenada)


// Y una función que crear lis con los items y los anida en el ul
function addItems(items) {

    for (let i = 0; i < items.length; i++) {
        const li = document.createElement("li");
        const textoLi = document.createTextNode(items[i]);
        listaDesordenada.appendChild(li);
        li.appendChild(textoLi);
    }
}

//Creamos un array con las unidades de la lista e invocamos la función sobre estos

const arrayItems = ['innerHTML', 'appendChild()', 'createElement()', 'createAttribute', 'createTextNode']
addItems(arrayItems)

// //Vamos a crear un attributo de clase con el valor de "lista"
const claseDeLista = document.createAttribute("class");
claseDeLista.value = "lista";
// //Lo incorporamos al ul
listaDesordenada.setAttributeNode(claseDeLista);

//SEGUNDO EJERCICIO
// Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. Por defecto, el párrafo debe estar visible. Dar estilos a los elementos afectados

//Creamos el botón, le añadimos el atributo type=button y lo anidamos en el segundo div (id = "button-div")

const nido2 = document.getElementById("button-div");
const botón = document.createElement("button");
const tipoBotón = document.createAttribute("type")
tipoBotón.value = "button";
botón.setAttributeNode(tipoBotón)
nido2.appendChild(botón)

//Estilizamos el botón y su div y le añadimos texto
botón.style.width = "300px";
botón.style.height = "100px";
botón.style.textAlign = "justify"
botón.style.backgroundColor = "green"
botón.style.color = "white"
botón.style.textAlign = "center"
botón.style.fontSize = "22px";
botón.style.borderRadius = "150px"
nido2.style.fontSize = "22px";
nido2.style.margin = "30px";
nido2.style.textAlign= "center";

const textoEnBotón = document.createTextNode("Si me pulsas, prometo revelarte los secretos")
botón.appendChild(textoEnBotón)
const texto2Botón = document.createTextNode("Venga, pulsa otra vez para enseñarme la puerta")

//Creamos la variable párrafo y la ocultamos

const párrafo = document.getElementById("párrafo-botón");
párrafo.style.visibility = "hidden"

//creamos el event onclick:
botón.onclick = function() {
    if (párrafo.style.visibility !== "visible") {
        párrafo.style.visibility = "visible"
        botón.replaceChild(texto2Botón, textoEnBotón)
        botón.style.backgroundColor = "#8B0000"

    } else {
        párrafo.style.visibility = "hidden";
        botón.replaceChild(textoEnBotón, texto2Botón)
        botón.style.backgroundColor = "green"
    }
}

// TERCER EJERCICIO
// Hacer que con onmouseover, se muestre un parrafo escondido, cuando pases el raton sobre el otro parrafo. Dar estilos a los elementos afectados

const párrafoOculto = document.querySelector("#párrafo1");
const párrafoVisible = document.querySelector("#párrafo2");

párrafoOculto.style.visibility = "hidden"

document.querySelector("#párrafo2").onmouseover = function() {
    párrafoOculto.style.visibility = "visible"
}
document.querySelector("#párrafo2").onmouseout = function() {
    párrafoOculto.style.visibility = "hidden"
}
    

//Le damos unos estilos al div y a los dos párrafos

const nido3 = document.getElementById("div-apariciones");
nido3.style.display = "flex";
nido3.style.flexDirection = "row";
nido3.style.flexWrap = "wrap";
nido3.style.justifyContent = "space-around";
nido3.style.alignItems = "flex-end"
nido3.style.alingnContent = "flex-end"
nido3.style.width = "100%";
nido3.style.backgroundColor = "black"
nido3.style.padding = "20px"


párrafoOculto.style.color = "red"
párrafoOculto.style.fontsize = "20px"
párrafoOculto.style.margin = "20px"
párrafoOculto.style.flex = "1 0 auto"
párrafoOculto.style.fontFamily = "Verdana"

párrafoVisible.style.color = "white"
párrafoVisible.style.fontSize = "20px"
párrafoVisible.style.margin = "22px"
párrafoVisible.style.flex = "1 0 auto"
párrafoVisible.style.fontFamily = "Courier New, Verdana"