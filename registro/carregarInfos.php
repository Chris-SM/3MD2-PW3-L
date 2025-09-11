<?php
include '../db/conecta.php';
$ide = $_REQUEST['ide'];
$selec = "select id_usuario,nm_login, nm_usuario,nm_email,nr_telefone from tb_usuario where id_usuario = $ide;";
$naFoi = true;
foreach ($conn->query($selec) as $row) {
    echo $row['nm_login']."|";
    echo $row['nm_usuario']."|";
    echo $row['nm_email']."|";
    echo $row['nr_telefone']."|";
    echo $row['nm_local_foto']."|";
    echo $row['id_usuario'];
}
?>