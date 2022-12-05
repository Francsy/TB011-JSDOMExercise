// Añadir dos elementos <li> a un <ul>, y unirlos al DOM de tu página HTML
// 	Usar:
// 	- innerHTML
// 	- appendChild()
// 	- createElement()
// 	- createAttribute()
// 	- createTextNode()


let element = document.getElementById("my-div");

const listaDesordenada = document.createElement("ul");
const node = document.createTextNode("Texto lista");

const unidadLista = document.createElement("li");
const unidadLista2 = document.createElement("li");
listaDesordenada.appendChild(unidadLista);
listaDesordenada.appendChild(unidadLista2);
element.appendChild(listaDesordenada);

const claseLista = document.createAttribute("class");
claseLista.value = "lista";
listaDesordenada.setAttributeNode(claseLista);
unidadLista.appendChild(node);

// Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. Por defecto, el párrafo debe estar visible. Dar estilos a los elementos afectados
const divButton = document.getElementById("button-div");
const button = document.createElement("input")
const tipoButton = document.createAttribute("type");
tipoButton.value = "button";
button.setAttributeNode(tipoButton);
divButton.appendChild(button);

button.innerHTML = "Pulsa aquí";
button.textContent = "Haga clic aquí";
button.style.width = "100px"

button.addEventListener("click", function() {
    if (document.getElementById("párrafo-botón").style.visibility === "visible"){
        document.getElementById("párrafo-botón").style.visibility = "hidden";
    } else {
        document.getElementById("párrafo-botón").style.visibility = "visible";
    }

})

// Hacer que con onmouseover, se muestre un parrafo escondido, cuando pases el raton sobre el otro parrafo. Dar estilos a los elementos afectados

const parrafo1 = document.getElementById("párrafo1");
parrafo1.style.visibility = "hidden";
const parrafo2 = document.getElementById("párrafo2");

párrafo2.onmouseover = function() {
    parrafo1.style.visibility = "visible";
};
párrafo2.onmouseout = function() {
    parrafo1.style.visibility = "hidden";
};
