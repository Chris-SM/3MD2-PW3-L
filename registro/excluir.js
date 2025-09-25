function excluir(id) {
    document.getElementById("senhaUsuEX").value = "";
    document.getElementById('ModalConExcluir').style.display = 'block';
    idN = id.replace("excluir", "");
    alert(idN);
    localStorage.setItem("idn",idN);
    idP = id.replace(idN, "");
    var pessoa = document.getElementById(idN).innerText;
    document.getElementById("FraseConfExc").innerText = "Tem Certeza que deseja excluir, " + pessoa + "? Digite a senha para confirmar";
}
function exclusao() {
    var senha = document.getElementById("senhaUsuEX").value;
    document.getElementById('ModalConExcluir').style.display = 'none'
    var idN = Number(localStorage.getItem("Idn"));
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () { 
        console.log(this.responseText);
    }
    xhttp.open("POST", "excluir.php?ide="+idN+"&senha="+senha);
    xhttp.send();
}