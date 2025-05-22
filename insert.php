<?php 
include 'conecta.php';
$usuario = $_REQUEST["nome"];
$email= $_REQUEST["email"];
$login = $_REQUEST["login"];
$tele = $_REQUEST["tele"];
$foto = $_REQUEST["foto"];
$senha = $_REQUEST["senha"];
$sql = 'insert into tb_usuario values(null, "'.$login.'","'.$usuario.'","'.$email.'","'.$senha.'","'.$tele.'","'.$foto.'");';
if ($conn->query($sql)) {
    echo 'Registro inserido';
}

?>