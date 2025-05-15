<?php 
include 'conecta.php';
$usuario = $_REQUEST["usuario"];
$email= $_REQUEST["email"];
$senha = $_REQUEST["senha"];
$sql = 'insert into tb_usuario values(null, "'.$usuario.'","'.$email.'","'.$senha.'");';
if ($conn->query($sql)) {
    echo 'Registro inserido';
}

?>