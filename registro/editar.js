function editar(id) {
    document.getElementById('ModalEditar').style.display = 'block';
    idN = id.replace("editar", "");
    idP = id.replace(idN, "");
    localStorage.setItem("Idn",Number(idN) + 1);
    ModalEdi(Number(idN) + 1);
}

function ModalEdi(idN) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this.responseText);
        var resposta = (this.responseText).split("|");
        document.getElementById("nomeUsu").value = resposta[0];
        document.getElementById("loginUsu").value = resposta[1];
        document.getElementById("emailUsu").value = resposta[2];
        document.getElementById("teleUsu").value = resposta[3];
        document.getElementById("foto").value = resposta[4];
        console.log(resposta);
    }
    xhttp.open("POST", "carregarInfos.php?ide=" + idN);
    xhttp.send();
}

function ConfiEdi() {
    var idN = localStorage.getItem("Idn");
    var alterar = [];
    alterar[0] = document.getElementById("nomeUsu").value
    alterar[1] = document.getElementById("loginUsu").value
    alterar[2] = document.getElementById("emailUsu").value
    alterar[3] = document.getElementById("teleUsu").value
    // alterar[4] = document.getElementById("foto").value
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () { }
    xhttp.open("POST", "alterar.php?ide="+idN+"&nome="+alterar[0]+"&login="+alterar[1]+"&email="+alterar[2]+"&tele="+alterar[3]);
    xhttp.send();
}