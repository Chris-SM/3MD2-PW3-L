function Inserir() {
    if (!RegraSenha.includes(false)) {
        var form = document.getElementById("formCadastro");
        var formData = new FormData(form);

        formData.append("nome", document.getElementById("nomeUsu").value);
        formData.append("login", document.getElementById("loginUsu").value);
        formData.append("email", document.getElementById("emailUsu").value);
        formData.append("tele", document.getElementById("teleUsu").value);
        formData.append("senha", document.getElementById("senhaUsu").value);

        var xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("POST", "insert.php", true);
        xhttp.send(formData);
    } else {
        alert("Criterios não atigindos");
    }
}




// function Inserir() {
//     if (!RegraSenha.includes(false)) {
//         const xhttp = new XMLHttpRequest();
//         var nome = document.getElementById("nomeUsu").value;
//         var login = document.getElementById("loginUsu").value;
//         var email = document.getElementById("emailUsu").value;
//         var tele = document.getElementById("teleUsu").value;
//         var foto = document.getElementById("fotoUsu").form.files[0];
//         var senha = document.getElementById("senhaUsu").value;
//         console.log(foto.value);
//         xhttp.onload = function () {
//             alert(this.responseText);
//         }
//         xhttp.open("POST", "insert.php?nome=" + nome + "&email=" + email + "&senha=" + senha + "&login=" + login + "&tele=" + tele+"&file="+foto,true);
//         xhttp.send(foto);
//     }
//     else {
//         alert("Criterios não atigindos");
//     }
// }
var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var caracter = ["!", "?", ".", ";", ":", "-", "_", "+", "*", "/", "|", "\\", '$', '§', '€', '£', '¥', '@', '#', '%', '&', '~', '`', '}', '{', 'Ç'];
var RegraSenha = [false, false, false, false];
var find = false;

$(document).ready(function () {
    $("#senhaUsu").keyup(function (e) {
        if (($('#senhaUsu').val()).length = 0) {
            RegraSenha[0] = false;
            RegraSenha[1] = false;
            RegraSenha[2] = false;
            RegraSenha[3] = false;
            RegraSenha[4] = false;
        }
        if (numeros.includes(e.key)) {
            RegraSenha[0] = true;
        }
        else if (letras.includes(e.key)) {
            RegraSenha[1] = true;
        }
        else if (letras.includes((e.key).toLowerCase())) {
            RegraSenha[2] = true;
        }
        else if (caracter.includes(e.key)) {
            RegraSenha[4] = true;
        }
        if (($('#senhaUsu').val()).length >= 8) {
            RegraSenha[3] = true;
        }
        else {
            RegraSenha[3] = false;
        }
        if (RegraSenha[0]) {
            RegraSenha[0] = false;
            for (let index = 0; index < letras.length; index++) {
                if (($('#senhaUsu').val()).includes(numeros[index])) {
                    RegraSenha[0] = true;
                    index = letras.length;

                }
            }
        }
        if (RegraSenha[1]) {
            RegraSenha[1] = false;
            for (let index = 0; index < letras.length; index++) {
                if (($('#senhaUsu').val()).includes(letras[index])) {
                    RegraSenha[1] = true;
                    index = letras.length;

                }
            }
        }
        if (RegraSenha[2]) {
            RegraSenha[2] = false;
            for (let index = 0; index < letras.length; index++) {
                if (($('#senhaUsu').val()).includes(letras[index].toUpperCase())) {
                    RegraSenha[2] = true;
                    index = letras.length;
                }
            }
        }
        if (RegraSenha[4]) {
            RegraSenha[4] = false;
            for (let index = 0; index < caracter.length; index++) {
                if (!find) {
                    if (($('#senhaUsu').val()).includes(caracter[index])) {
                        console.log(($('#senhaUsu').val()).includes(caracter[index]));
                        RegraSenha[4] = true;
                        index = caracter.length;
                    }
                }
            }
        }
        // if (!($('#senhaUsu').val()).toLowerCase().includes(letra)) {
        //     RegraSenha[2] = false;
        // }
        // else{
        //     RegraSenha[2] = true;
        //     console.log('A foi');
        //     return;
        // }
        regrasCheck();
    });
    function regrasCheck() {
        if (RegraSenha[0]) {
            $('#Nume').attr('style', 'color: blue;');
        }
        else {
            $('#Nume').attr('style', 'color: black;');
        }
        if (RegraSenha[1]) {
            $('#LetraMi').attr('style', 'color: blue;');
        }
        else {
            $('#LetraMi').attr('style', 'color: black;');
        }
        if (RegraSenha[2]) {
            $('#LetraMa').attr('style', 'color: blue;');
        }
        else {
            $('#LetraMa').attr('style', 'color: black;');
        }
        if (RegraSenha[3]) {
            $('#8carac').attr('style', 'color: blue;');
        }
        else {
            $('#8carac').attr('style', 'color: black;');
        }
        if (RegraSenha[4]) {
            $('#Especial').attr('style', 'color: blue;');
        }
        else {
            $('#Especial').attr('style', 'color: black;');
        }
    }
});
function formatarTel(EntrTele) {
    let valor = EntrTele.value;

    // Remove letras
    valor = valor.replace(/\D/g, "");

    if (valor.length > 2) {
        // Formatação (22) 22222-2222
        
        valor = `(${valor.substring(0, 2)}) ${valor.substring(2, 7)}-${valor.substring(7)}`;
    } else if (valor.length > 0) {
        valor = `(${valor.substring(0, 2)}`;
    }

    EntrTele.value = valor;
}