<?php

include 'conecta.php';
session_start();

$usuario = $_REQUEST['login'];
$senha = $_REQUEST['senha'];

$select = "select * from tb_usuario where nm_login = '$usuario';";
$result = $conn->query($select);
$row = $result->fetch_row();
if ($conn->query($select)) {
foreach ($conn->query($select) as $row) {
    if ($senha === $senha_correta) {
        $_SESSION['usuario'] = $usuario;
        echo "Certo";
        //Tudo certo
    } else {
        echo "Senha";
        //Senha errada
    }
}
} else {
    //Nada Encontrado
    echo "Nada";
}
exit();
