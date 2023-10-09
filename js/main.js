function agregarNumero(numero) {
    document.getElementById("numero1").value += numero;
}
function agregarNumero1(numero) {
    if (campoActivo) {
        campoActivo.value += numero;
    }
}

document.getElementById("claveActual").addEventListener("click", function() {
    campoActivo = this;
});

document.getElementById("claveNueva").addEventListener("click", function() {
    campoActivo = this;
});
let clave=1234;
let datos = document.querySelector("#datos")
function validarEntrada() {
    // Obtener el valor del campo de entrada
    var entrada = document.getElementById("nume").value;

    // Convertir el valor a un número entero
    var valor = parseInt(entrada);

    // Verificar si el valor está dentro del rango
    if (isNaN(valor) || valor < 10000 || valor > 1200000) {
       alert("La entrada debe estar entre 10,000 y 1,200,000.");
       datos.innerHTML=`<a href="otro_valor.html" class="button"  onclick="validarEntrada()">Continuar</a>`
       window.location.href = "otro_valor.html";
          
    } else {
        window.location.href = "clave.html";
    }
}

function validarContrasena() {
    // Obtener el valor del campo de entrada
    var entrada = document.getElementById("numero1").value;

    // Convertir el valor a un número entero
    var valor = parseInt(entrada);

    // Verificar si el valor está dentro del rango
    if (valor !== 1234) {
       alert("contraseña incorrecta, vuelva a intentarlo");
       datos.innerHTML=`<a href="clave.html" class="button"  onclick="validarContrasena()">Continuar</a>`
       window.location.href = "clave.html";
          
    } else {
        window.location.href = "resultado_retiro.html";
    }
}

// document.getElementById("btn1").addEventListener("click", function() {
//     agregarNumero(1);
// });

// document.getElementById("btn2").addEventListener("click", function() {
//     agregarNumero(2);
// });

// document.getElementById("btn3").addEventListener("click", function() {
//     agregarNumero(3);
// });
// document.getElementById("btn4").addEventListener("click", function() {
//     agregarNumero(4);
// });

// document.getElementById("btn5").addEventListener("click", function() {
//     agregarNumero(5);
// });

// document.getElementById("btn6").addEventListener("click", function() {
//     agregarNumero(6);
// });

// document.getElementById("btn7").addEventListener("click", function() {
//     agregarNumero(7);
// });

// document.getElementById("btn8").addEventListener("click", function() {
//     agregarNumero(8);
// });

// document.getElementById("btn9").addEventListener("click", function() {
//     agregarNumero(9);
// });

// document.getElementById("btn0").addEventListener("click", function() {
//     agregarNumero(0);
// });

// document.getElementById("btn*").addEventListener("click", function() {
//     agregarNumero("*");
// });

// document.getElementById("btn#").addEventListener("click", function() {
//     agregarNumero("#");
// });
