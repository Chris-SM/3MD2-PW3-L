<?php 

include '../db/conecta.php';

$headers = realpath('../');
$test = $_FILES['fotoUsu']['tmp_name'];
$headers = $headers."\\fotos\user\\".$_FILES['fotoUsu']['name'];
$nomeFoto = $_FILES['fotoUsu']['name'];



if (copy($_FILES['fotoUsu']['tmp_name'], $headers)) {
    echo "Arquivo enviado com sucesso.";
} else {
    echo "Falha ao enviar o arquivo.";
}


$usuario = $_REQUEST["nome"];
$email= $_REQUEST["email"];
$login = $_REQUEST["login"];
$tele = $_REQUEST["tele"];
$tele = str_replace(")","",$tele);
$tele = str_replace("(","",$tele);
$tele = str_replace(" ","",$tele);
$tele = str_replace("-","",$tele);
$foto = str_replace("\\","\\\\",("..\\fotos\user\\".$_FILES['fotoUsu']['name']));
$senha = $_REQUEST["senha"];
$sql = 'insert into tb_usuario values(null, "'.$login.'","'.$usuario.'","'.$email.'","'.$senha.'","'.$tele.'","'.$foto.'");';
if ($conn->query($sql)) {
    echo 'Registro inserido';
    $_SESSION['usuario'] = $usuario;
}

?>