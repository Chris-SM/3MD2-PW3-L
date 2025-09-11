function excluir(id) {
    document.getElementById('ModalConExcluir').style.display = 'block';
    idN = id.replace("excluir", "");
    idP = id.replace(idN, "");
    var pessoa = document.getElementById(idN).innerText;
    document.getElementById("FraseConfExc").innerText = "Tem Certeza que deseja excluir, " + pessoa + "? Digite a senha para confirmar";
}
function exclusao() {
    document.getElementById('ModalConExcluir').style.display = 'none'
}