
carregarLista()
function carregarLista() {
    var vez = 0;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        qt = Number(this.responseText);
        while (vez < qt) {
            linhaPessoa(vez);
            vez++;
        }
    }
    xhttp.open("POST", "contar.php");
    xhttp.send();


    // const xhttp = new XMLHttpRequest();
    // xhttp.onload = function () {
    //     var resposta = (this.responseText).split("|");
    //     console.log("ID: " + resposta[0] + "  Nome:" + resposta[1]);
    //     document.getElementById("cadastros").innerHTML += "<tr><td>12</td><td>13</td><td>15</td></tr>";
    // }
    // xhttp.open("POST", "cadastrados.php?vez=" + vez);
    // xhttp.send();
}
function linhaPessoa(vez) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var resposta = (this.responseText).split("|");
        var buttaoEdi = "<td><button id='editar" + vez + "' onclick='editar(id)'>Editar</button></td>";
        var buttaoExc = "<td><button id='excluir" + vez + "' onclick='excluir(id)'>Excluir</button></td>";
        console.log("ID: " + resposta[0] + "  Nome:" + resposta[1]);
        document.getElementById("cadastros").innerHTML += "<tr><td class='user'>" + resposta[1] + "</td>"+
        "<td class='login'>" + resposta[2] + "</td>" +
        "<td class='email'>" + resposta[3] + "</td>" +
        "<td class='fone'>" + resposta[4] + "</td>" +
        "<td class='foto'><img src='" + resposta[5] + "'></td>" +
         buttaoEdi + buttaoExc + "</tr>";
    }
    xhttp.open("POST", "cadastrados.php?vez=" + vez);
    xhttp.send();
}