
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
        var buttaoEdi = "<button id='editar" + vez + "' onclick='editar(id)' class='btn btn-primary' style='float:right;'>Editar</button>";
        var buttaoExc = "<button id='excluir" + vez + "' onclick='excluir(id)' class='btn btn-danger 'style='float:left;'>Excluir</button>";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var resposta = (this.responseText).split("|");
        if ("" == resposta[5]) {
            resposta[5] = "../fotos/user/user.png";
        }
        var conteudo = "<div class='card' style='width: 18rem;'>"+
            '<img class="card-img-top" src="'+resposta[5]+'">'+
            '<div class="card-body">'+
                '<h5 class="card-title">'+resposta[2]+'</h5>'+
                '<p class="card-text">Nome de Usuario: '+resposta[1]+
                '<br>Email: '+resposta[3]+'<br>Telefone: '+resposta[4]+'</p>'+buttaoEdi+buttaoExc+
            '</div> </div>';
        document.getElementById("Registados").innerHTML += conteudo;
    }
    xhttp.open("POST", "cadastrados.php?vez=" + vez);
    xhttp.send();
}