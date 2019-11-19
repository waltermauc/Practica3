var posActual = 0;
imagenes = [0];

array = [{ "id": 1, "imagen": "images/images1.jpg" },
{ "id": 2, "imagen": "images/images2.jpg" },
{ "id": 3, "imagen": "images/images3.jpg" },
{ "id": 4, "imagen": "images/images4.jpg" },
{ "id": 5, "imagen": "images/images5.jpg" },
{ "id": 6, "imagen": "images/images6.jpg" },
{ "id": 7, "imagen": "images/images7.jpg" },
{ "id": 8, "imagen": "images/images8.jpg" },
{ "id": 9, "imagen": "images/images9.jpg" },
{ "id": 10, "imagen": "images/images10.jpg" }];

function inicio() {
    for (i = 0; i < 5; i++) {
        imagenes[i] = Math.floor(Math.random() * (10));
    }
    posActual = 0;
    bloquearBoton();
    mostarimagenes();
}
function mostarimagenes() {
    console.log(imagenes);
    var texto = "<img src=" + array[imagenes[posActual]].imagen + ">";
    window.document.getElementById("imagen").innerHTML = texto;
}
function bloquearBoton() {
    if (posActual == 0) {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = true;
    }
    else if (posActual == 4) {
        window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;
    } else {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = false;
    }
}
function siguiente() {
    posActual++;
    bloquearBoton();
    mostarimagenes();
}
function anterior() {
    posActual--;
    bloquearBoton();
    mostarimagenes();
}