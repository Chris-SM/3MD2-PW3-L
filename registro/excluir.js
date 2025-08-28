function excluir(id) {
    document.getElementById('ModalConExcluir').style.display = 'block';
    idN = id.replace("excluir", "");
    idP = id.replace(idN, "");
    localStorage.setItem("Selecionado", idN);
    localStorage.setItem("SelecionadoPara", idP);
    var pessoa = document.querySelectorAll(".user")[0].innerHTML;
    console.log(pessoa);
    document.getElementById("FraseConfExc").innerText = "Tem Certeza que deseja excluir, " + pessoa + "? Digite a senha para confirmar";
}
function exclusao() {
    document.getElementById('ModalConExcluir').style.display = 'none'
}