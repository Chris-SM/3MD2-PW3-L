
function Inserir() {
    const xhttp = new XMLHttpRequest();
    var nome = document.getElementById("nomeUsu").value;
    var login = document.getElementById("loginUsu").value;
    var email = document.getElementById("emailUsu").value;
    var tele = document.getElementById("teleUsu").value;
    var foto = document.getElementById("fotoUsu").value;
    var senha = document.getElementById("senhaUsu").value;
    console.log(foto);
    xhttp.onload = function() {
        alert(this.responseText);
    }
    xhttp.open("POST", "insert.php?nome="+nome+"&email="+email+"&senha="+senha+"&login="+login+"&tele="+tele+"&foto="+foto);
    xhttp.send();
}