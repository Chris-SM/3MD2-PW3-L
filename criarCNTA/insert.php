<?php 

include '../db/conecta.php';

$uploaddir = '/fotos/user';
$uploadfile = $uploaddir . basename($_FILES['file']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
} else {
}


$usuario = $_REQUEST["nome"];
$email= $_REQUEST["email"];
$login = $_REQUEST["login"];
$tele = $_REQUEST["tele"];
$tele = str_replace("("|")","",$tele);
$tele = str_replace(" "|"-","",$tele);
// $foto = $_REQUEST["foto"];
$senha = $_REQUEST["senha"];
$sql = 'insert into tb_usuario values(null, "'.$login.'","'.$usuario.'","'.$email.'","'.$senha.'","'.$tele.'",null);';
if ($conn->query($sql)) {
    echo 'Registro inserido';
    $_SESSION['usuario'] = $usuario;
}

?>